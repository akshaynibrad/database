from django.conf.urls import include, url
from django.contrib import admin
from collegeapp import urls as collegeappurl
from studentapp import urls as studentappurl

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^collegeapp/', include(collegeappurl)),
    url(r'^studentapp/', include(studentappurl)),
    url(r'^','studentapp.views.base')
]