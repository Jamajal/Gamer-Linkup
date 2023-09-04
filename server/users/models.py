from django.db import models
from django.contrib.auth.models import AbstractUser
from categories.models import Category

class CustomUser(AbstractUser):
    STATUS = (
        ('regular', 'regular'),
        ('moderator', 'moderator'),
    )
    nickname = models.CharField(max_length=36, unique=True)
    email = models.EmailField(unique=True)
    status = models.CharField(max_length=24, choices=STATUS, default='regular')
    discord_profile_code = models.CharField(max_length=50)
    #profile_image = models.ImageField()

    interests = models.ManyToManyField(
        Category,
        blank=True,
        default=''
    )    

