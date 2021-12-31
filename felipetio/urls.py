from django.contrib import admin
from django.urls import include, path
from django.shortcuts import render
from rest_framework import routers
from links import views

router = routers.DefaultRouter()
router.register(r"links", views.LinkView, "links")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("", lambda r: render(r, "index.html")),
]
