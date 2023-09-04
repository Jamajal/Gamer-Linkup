from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=65)
    description = models.CharField(max_length=100, default='')
    cover = models.ImageField(upload_to='categories/covers/%Y/%m/%d/', blank=True, default='')

    def __str__(self):
        return self.name