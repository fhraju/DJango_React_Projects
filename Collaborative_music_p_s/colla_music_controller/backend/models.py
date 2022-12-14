from django.db import models
import string
import random

def unique_code_generator():   # Function for generating unique codes
    lenth = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=lenth))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

class Room(models.Model):
    code = models.CharField(max_length=8, unique=True, default="")
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(default=False)
    votes_to_skip = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
