from django.conf.urls import include, url
from studentapp import views

urlpatterns = [
    url(r'^student-details/',views.student_details),
    url(r'^save-student-details/',views.save_student_details)
]