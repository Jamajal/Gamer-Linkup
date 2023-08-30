from rest_framework import serializers
from .models import Post
from .models import Category
from users.models import CustomUser

"""
class CategorySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=36)
    description = serializers.CharField(max_length=100)
    #cover = serializers.ImageField()

class PostSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField() 
    description = serializers.CharField()
    votes = serializers.IntegerField()
    invited_players = serializers.IntegerField()
    #cover = serializers.ImageField()
    created_at = serializers.DateTimeField()
    categories = serializers.StringRelatedField(
        many=True
    )
    categories_objects = CategorySerializer(
        many=True,
        source=categories
    )
    #author = serializers.PrimaryKeyRelatedField(
    #    many=False,
    #    read_only=True,
    #)
"""

class PostSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(
        many=True,
        read_only=True,
    )

    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'votes', 'invited_players', 'created_at', 'category', 'author']