from rest_framework import serializers

class PostSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=35)
    description = serializers.CharField(max_length=165)
    votes = serializers.IntegerField()
    created_at = serializers.DateTimeField()
    category = serializers.StringRelatedField()
