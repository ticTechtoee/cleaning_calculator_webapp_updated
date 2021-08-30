from django.urls import path

from .views import registerView

urlpatterns = [
    path('signup/', registerView, name='signup'),

]