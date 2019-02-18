from django.db import models

GENDER_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    )

class College(models.Model):
    college_name=models.CharField(max_length=20,blank=False)
    college_address=models.CharField(max_length=50,blank=False)
    college_city=models.CharField( max_length=20,blank=False)

    def __unicode__(self):
        return unicode(self.college_name)


class Student(models.Model):
    name=models.CharField(max_length=50,blank=False)
    city=models.CharField(max_length=20,blank=False)
    contact_no=models.CharField(max_length=12,blank=False)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default='Male')
    branch=models.CharField(max_length=20, blank=False)
    college=models.ForeignKey(College,blank=True,null=True)

    def __unicode__(self):
        return unicode(self.name)