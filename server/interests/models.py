from django.db import models

class Interest(models.Model):
    name = models.CharField(max_length=34)
    description = models.TextField(max_length=150)

    def __str__(self):
        return self.name
