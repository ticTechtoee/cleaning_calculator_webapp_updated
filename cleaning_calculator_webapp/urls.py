from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Home.urls', namespace='home')),
    path('about/', include('About.urls', namespace='about')),
    path('calculator/', include('calculator.urls', namespace='calculator')),
    path('tutorial/', include('Tutorial.urls', namespace='tutorial')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('accounts.urls')),
]
