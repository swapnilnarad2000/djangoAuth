from django.db import models

# Create your models here.
class Register(models.Model):
    name = models.CharField(max_length=122)
    email = models.CharField(max_length=122)
    phone = models.CharField(max_length=12)
    password = models.CharField(max_length=30)
    date = models.DateField()
    #this will show name and phone as title field
    def __str__(self):
        return ('Name : ' +self.name + ", Contact :  " +self.phone)