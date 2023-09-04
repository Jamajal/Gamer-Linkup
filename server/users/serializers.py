from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    interests = serializers.PrimaryKeyRelatedField(
        queryset= CustomUser.objects.all(),
        many=True
    )

    class Meta:
        model = CustomUser
        fields = ['id', 'nickname', 'email', 'discord_profile_code', 'interests', 'status']