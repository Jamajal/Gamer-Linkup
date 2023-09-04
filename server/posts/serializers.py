from rest_framework import serializers
from .models import Post
from .models import Category

class PostSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Category.objects.all(), 
    )

    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'votes', 'invited_players', 'created_at', 'category', 'author']