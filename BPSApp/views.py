from django.shortcuts import render


def login_screen(request):
    return render(request, 'BPSApp/login.html')


def homepage(request):
    return render(request, 'BPSApp/homepage.html')
