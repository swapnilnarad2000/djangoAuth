from django.contrib import admin
from django.urls import path,include
from home import views

urlpatterns = [
    path('', views.home,name='Home'),
    path('login',views.loginU,name = 'Login'),
    path('register',views.register,name = 'Register'),
    path('logout',views.logoutU,name = 'LogOut')
]