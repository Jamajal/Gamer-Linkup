from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Category
from .serializers import CategorySerializer

@api_view(http_method_names=['get', 'post'])
def read_or_insert_category(request):
    if request.method == 'GET':
        categories = Category.objects.all()

        if(categories):
            serializer = CategorySerializer(instance=categories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response({
            'detail': "Couldn't find any categories"
        }, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        serializer = CategorySerializer(
            data = request.data,
            context = {'request':request}
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            serializer.data, 
            status=status.HTTP_201_CREATED
        )
    
@api_view(http_method_names=['get', 'patch', 'delete'])
def put_detail_delete_category(request, pk):
    category = Category.objects.all().filter(pk=pk).first()

    if category:
        if request.method == 'GET':
            serializer = CategorySerializer(
                instance=category, 
                many=False,
                context={'request':request}
            )
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PATCH':
            serializer = CategorySerializer(
                instance=category,
                data=request.data,
                many=False,
                context={'request': request},
                partial=True,
            )
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )
        
        elif request.method == 'DELETE':
            category.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
    return Response({
        'detail': f'Category with id {pk} not found.'
    }, status=status.HTTP_404_NOT_FOUND)
