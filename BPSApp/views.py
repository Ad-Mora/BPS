from django.shortcuts import render

# Create your views here.


def login_screen(request):
    return render(request, 'BPSApp/Login.html')


def homepage(request):
    return render(request, 'BPSApp/Homepage.html')
