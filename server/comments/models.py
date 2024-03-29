from django.db import models
from users.models import CustomUser

class Comment(models.Model):
    content = models.CharField(max_length=180)
    
    author = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.author.username