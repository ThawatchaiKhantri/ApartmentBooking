import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bookingschedulepage',
  templateUrl: './bookingschedulepage.component.html',
  styleUrls: ['./bookingschedulepage.component.css']
})
export class BookingschedulepageComponent implements OnInit {

  constructor(private userService: UserService, 
    private router: Router,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer) { }
    
    userId : any;
    paymentlist : any = []

    ngOnInit() {
      this.userId = sessionStorage.getItem('user_id')
      this.userService.getUserDetailById(this.userId).subscribe((res) => {
        this.userService.getPaymentByUserId(res.userId, 1).subscribe(res =>{
          
            console.log('paymentlist =>', res)
            if (res) {
              this.paymentlist = res;
            }
          });
        });
    } 
}
