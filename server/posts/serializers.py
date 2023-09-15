from rest_framework import serializers
from .models import Post
from .models import Category
from users.serializers import UserSerializer

class PostSerializerRead(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Category.objects.all(), 
    )

    author = UserSerializer()

    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'votes', 'invited_players', 'created_at', 'category', 'author']

class PostSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Category.objects.all(), 
    )

    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'votes', 'invited_players', 'created_at', 'category', 'author']