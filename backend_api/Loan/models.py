from django.db import models

class Loan(models.Model):
    st = (
        ("NEW", "New Loan"), 
        ("REJECTED", "Rejected Loan"),
        ("APPROVED", "Approved Loan"),
    )
    tenure = models.IntegerField(default=12)
    interest = models.FloatField(default=7.5)
    state = models.CharField(max_length=8, choices=st)

    def __str__(self):
        return self.state