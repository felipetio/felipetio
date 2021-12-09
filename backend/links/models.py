from django.contrib.auth.models import User
from django.db import models


class Link(models.Model):
    title = models.CharField(max_length=200, blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return self.title
