from django.shortcuts import render


def login_screen(request):
    return render(request, 'BPSApp/Login.html')


def homepage(request):
    return render(request, 'BPSApp/Homepage.html')
