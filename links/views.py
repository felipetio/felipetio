from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import viewsets
from .serializers import LinkSerializer
from .models import Link


class LinkView(viewsets.ModelViewSet):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()

    @method_decorator(cache_page(60))
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
