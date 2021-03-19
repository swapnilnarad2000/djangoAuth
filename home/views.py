from django.shortcuts import render,redirect
from home.models import Register
from datetime import datetime
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from django.contrib import messages
# Create your views here.
def home(request):
    if request.user.is_anonymous:
        return redirect('/login')
    return render(request,'home.html')

def loginU(request):
    #username = swapnil123 password = !!!@@@###
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username = username,password = password)
    print(user)
    if user is not None:
        login(request,user)
        return render(request,'home.html')
    else:
        # messages.error(request, 'Wrong Credentials')
        return render(request,'login.html')

def register(request):
    if(request.method == 'POST'):
        name = request.POST.get('username')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        user = User.objects.create_user(name, email,password)
        user.save()
        messages.success(request, 'New account added successfully')
    #     # print(name,email,phone,password)
    #     register = Register(name = name , email = email,phone=phone,password = password,date = datetime.now())
    #     # print(register)
    #     register.save()
    return render(request,'register.html')

def logoutU(request):
    logout(request)
    return redirect('/login')