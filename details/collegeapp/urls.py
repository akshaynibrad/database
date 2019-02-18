from django.conf.urls import include, url
from collegeapp import views

urlpatterns = [
    url(r'^college-details/',views.college_details),
    url(r'^save-college-details/',views.save_college_details)
]