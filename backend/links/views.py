from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LinkSerializer
from .models import Link


class LinkView(viewsets.ModelViewSet):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
