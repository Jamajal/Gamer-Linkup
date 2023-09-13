from rest_framework import serializers
from .models import Comment
from users.models import CustomUser

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(
        queryset=CustomUser.objects.all(), 
    )

    class Meta:
        model = Comment
        fields = ['id', 'content', 'author']