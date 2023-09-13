from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Comment
from .serializers import CommentSerializer

@api_view(http_method_names=['get', 'post'])
def read_or_insert_comment(request):
    if request.method == 'GET':
        comments = Comment.objects.all() # Ordenar depois
        
        if(comments):      
            serializer = CommentSerializer(instance=comments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response({
            'detail': 'Nops...'
        }, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "POST":
        serializer = CommentSerializer(
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
def put_detail_delete_comment(request, pk):
    comment = get_object_or_404(
        Comment.objects.all(),
        pk=pk
    )

    if request.method == 'GET':
       serializer = CommentSerializer(
            instance=comment,
            many=False,
            context={'request': request},
        )
       return Response(serializer.data)

    elif request.method == 'PATCH':
        serializer = CommentSerializer(
            instance=comment,
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
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
