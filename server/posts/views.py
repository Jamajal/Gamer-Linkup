from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Post
from .serializers import PostSerializer
from .serializers import PostSerializerRead
from users.models import CustomUser

@api_view(http_method_names=['get', 'post'])
def read_or_insert_post(request):
    if request.method == 'GET':
        posts = Post.objects.get_posts_by_order()
        
        if(posts):      
            serializer = PostSerializerRead(instance=posts, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response({
            'detail': 'Nops...'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'POST':
        serializer = PostSerializer(
            data=request.data,
            context={'request': request},
        )
        
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )

@api_view(http_method_names=['get', 'patch', 'delete'])
def put_detail_delete_post(request, pk):
    post = get_object_or_404(
        Post.objects.get_posts_by_order(),
        pk=pk
    )

    if request.method == 'GET':
       serializer = PostSerializerRead(
            instance=post,
            many=False,
            context={'request': request},
        )
       return Response(serializer.data)

    elif request.method == 'PATCH':
        serializer = PostSerializer(
            instance=post,
            data=request.data,
            many=False,
            context={'request': request},
            partial=True,
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            serializer.data,
        )

    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(http_method_names=['get'])
def get_posts_by_id(request, pk):
    user = CustomUser.objects.get(pk=pk)
    posts = Post.objects.filter(author=user)
    if(posts):      
        serializer = PostSerializerRead(instance=posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    return Response({
        'detail': 'Nops...'
    }, status=status.HTTP_400_BAD_REQUEST)