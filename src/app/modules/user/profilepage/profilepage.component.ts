import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  constructor(private userService: UserService, 
    private router: Router,
    private fb: FormBuilder,) {}
    
  userprofile: any = [];
  userId : any;

  userprofileForm = this.fb.group({
    Id: '',
    userId: '',
    userTitle: '',
    userFname: '',
    userLname: '',
    address: '',
    phone: '',
    email: '',
    cardId: '',
    userGender: '',
    userBirthday: '',
    zipCode: '',
    pvnId: '',
    sdtId: '',
    disId: '',
    amName: '',
    picture: '',
    idBank: '',
    recordStatus: '',

  });

  ngOnInit(): void {
    this.userId  = sessionStorage.getItem('user_id');

    console.log('user_id', this.userId)

    this.userService.getUserDetailById(this.userId).subscribe((res) => {
      console.log('res =>', res);
      if (res) {
        this.userprofile = res;
        this.userprofileForm.patchValue(
          {
            userFname: res.userFname,
            userLname: res.userLname,
            address: res.address,
            phone: res.phone,
            email: res.email,
            userGender: res.userGender,
            userBirthday: res.userBirthday,
          }
        )
      }
    });
  }
}
