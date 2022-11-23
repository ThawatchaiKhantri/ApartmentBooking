import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-safety',
  templateUrl: './profile-safety.component.html',
  styleUrls: ['./profile-safety.component.css']
})
export class ProfileSafetyComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,) { }
 

    editPasswordForm = this.formBuilder.group({

      userId: '',
      username: '',
      password: '',
      
    });


  Userprofile: any = []
  userId : any;
  pipe = new DatePipe('en-US');
  isUpdate : any;



  ngOnInit(): void {
    this.userId = sessionStorage.getItem('user_id');
    this.userService.getUserById(this.userId).subscribe(res =>{
      console.log('res =>',res)
      if(res){
        this.editPasswordForm.patchValue({
          userId : res.userId,
          username: res.username,
          password: res.password,
        });
      }
    
    });
  }
  onSubmit(){
    console.log('data : ',this.editPasswordForm.patchValue)
    Swal.fire({
      title: 'ต้องการเเก้ไขข้อมูล?',
      text: "คุณต้องการเเก้ไขข้อมูลใช่หรือไม่!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.updatePassword( this.editPasswordForm.value.userId,  this.editPasswordForm.value).subscribe(res => {
          
          if(res){
            Swal.fire({
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: true
              
            })
            this.router.navigate(['user/profile-safetys'])
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'ไม่สามารถแก้ไขข้อมูลส่วนตัวได้!'
            })
          }
        });
       
      }
    })
  } 
  
}

