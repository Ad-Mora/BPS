from django.shortcuts import render


def login_screen(request):
    return render(request, 'BPSApp/sitePages/login.html')


def homepage(request):
    return render(request, 'BPSApp/sitePages/homepage.html')
