from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from categories.models import Category


class CustomUserManager(BaseUserManager):
    def _create_user(self, email, username, password, **extra_fields):
        if not email:
            raise ValueError('User must provide an email!')
        if not password:
            raise ValueError("User must provide a password!")
        
        user = self.model(
            email = self.normalize_email(email),
            username = username,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_user(self, email, username, password, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_active',True)
        extra_fields.setdefault('is_superuser',False)
        return self._create_user(email, username, password, **extra_fields)
    
    def create_superuser(self, email, username, password, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_active',True)
        extra_fields.setdefault('is_superuser',True)
        return self._create_user(email, username, password, **extra_fields)
    
class CustomUser(AbstractUser):
    username = models.CharField(max_length=36, unique=True)
    email = models.EmailField(unique=True)
    discord_profile_code = models.CharField(max_length=50, blank=True)
    #profile_image = models.ImageField()

    interests = models.ManyToManyField(
        Category,
        blank=True,
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username or ''


