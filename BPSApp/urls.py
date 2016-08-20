from django.conf.urls import url
from . import views

app_name = 'BPSApp'

urlpatterns = [
    url(r'^$', views.login_screen, name='login'),
    url(r'^home/$', views.homepage, name='homepage'),
]