from django.shortcuts import render
from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
# Create your views here.

def index(request):
    return render(request, 'index.html')


class CarouselListView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer

