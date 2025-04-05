from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include

def home(request):
    return HttpResponse("Welcome to the API!") #view корневого пути

urlpatterns = [
    path('', home), 
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  
]


