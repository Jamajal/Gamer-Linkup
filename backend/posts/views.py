from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Post
from .serializers import PostSerializer

@api_view()
def get_posts(request):
    posts = Post.objects.get_posts_by_order()[:10]

    if posts:
        serializer = PostSerializer(instance=posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response({
        'detail': 'Failed to find posts'},
        status=status.HTTP_404_NOT_FOUND
    )

@api_view()
def get_post_detail(request, pk):
    post = Post.objects.get_posts_by_order().filter(pk=pk).first()

    if(post):
        serializer = PostSerializer(instance=post)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    return Response({
        'detail': f'Failed to find post with id {pk}'},
        status=status.HTTP_404_NOT_FOUND
    )