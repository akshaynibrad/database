from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.shortcuts import *
from django.shortcuts import HttpResponse
import json
from collegeapp.models import Student, College


@csrf_exempt
def student_details(request):
    data={}
    college_list = College.objects.all()
    data = {'college_list': college_list}
    return render(request,'studentapp/student.html',data)


def base(request):
    return render(request,'base.html')


@csrf_exempt
def save_student_details(request):
    Student(
        name=request.POST.get('firstname'),
        city=request.POST.get('city'),
        contact_no=request.POST.get('contactno'),
        gender =request.POST.get('gender'),
        branch=request.POST.get('branch'),
        college=College.objects.get(id=request.POST.get('college')),
    ).save()
    data = {'success': 'send succesfully'}
    # print "data",data
    return HttpResponse(json.dumps(data), content_type='application/json')
