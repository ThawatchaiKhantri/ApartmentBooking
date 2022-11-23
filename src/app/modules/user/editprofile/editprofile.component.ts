import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,) { }
 

    userprofileForm = this.formBuilder.group({

      userId: '',
      userFname: '',
      userLname: '',
      address: '',
      phone: '',
      email: '',
      zipCode: '',
      pvnId: '',
      sdtId: '',
      disId: '',
      amName: '',
      userGender: '',
      userBirthday: '',
      
    });


  Userprofile: any = []
  userId : any;
  pipe = new DatePipe('en-US');
  isUpdate : any;



  ngOnInit(): void {

    this.userId = sessionStorage.getItem('user_id');
    this.isUpdate = false;

    this.userService.getUserDetailById(this.userId).subscribe(res =>{
      console.log('res =>',res)
      if(res){
        this.Userprofile =res;
        this.userprofileForm.patchValue({
          userId : res.userId,
          userFname: res.userFname,
          userLname: res.userLname,
          amName: res.amName,
          address: res.address,
          zipCode: res.zipCode,
          pvnId: res.pvnId,
          sdtId: res.sdtId,
          disId: res.disId,
          phone: res.phone,
          email: res.email,
          userGender: res.userGender,
          userBirthday: res.userBirthday,
        });
      }
    
    });
  }
  onEdit() {
    this.isUpdate = true;
  }
  onCancel() {
    this.ngOnInit();
  }

  onSubmit(){

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
        this.userService.updateUserdetails( this.userprofileForm.value,  this.userprofileForm.value.userId).subscribe(res => {
          
          if(res){
            Swal.fire({
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: true
              
            })
            this.router.navigate(['user/profilepages'])
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
