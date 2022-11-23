import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApartmentService } from '../apartment.service';
import { EditProfileapartmentService } from './edit-profileapartment.service';

@Component({
  selector: 'app-edit-profileapartment',
  templateUrl: './edit-profileapartment.component.html',
  styleUrls: ['./edit-profileapartment.component.css']
})
export class EdilProfileapartmentComponent implements OnInit {

  constructor(private editProfileapartmentService: EditProfileapartmentService,
    private router: Router,
    private formBuilder: FormBuilder,) { }
 

    editapartmentprofileForm = this.formBuilder.group({

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
      provinceNameTh:'',
      amphurNameTh:'',
      districtNameTh:'',
      
    });


  Apartmenteditprofile: any = []
  userId : any;
  pipe = new DatePipe('en-US');
  isUpdate : any;



  ngOnInit(): void {

    this.userId = sessionStorage.getItem('user_id');
    this.isUpdate = false;

    this.editProfileapartmentService.getUserDetailById(this.userId).subscribe(res =>{
      console.log('res =>',res)
      if(res){
        this.Apartmenteditprofile =res;
        this.editapartmentprofileForm.patchValue({
          userId : res.userId,
          userFname: res.userFname,
          userLname: res.userLname,
          amName: res.amName,
          address: res.address,
          zipCode: res.zipCode,
          pvnId: res.pvnId,
          sdtId: res.sdtId,
          disId: res.disId,
          provinceNameTh: res.provinceNameTh,
          amphurNameTh:res.amphurNameTh,
          districtNameTh:res.districtNameTh,
          phone: res.phone,
          email: res.email,
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
      confirmButtonText: 'Yes, we it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.editProfileapartmentService.updateUserdetails(this.editapartmentprofileForm.value, this.editapartmentprofileForm.value.userId).subscribe(res => {
          
          if(res){
            Swal.fire({
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: true
            }).then((rs) => {
              if (rs.isConfirmed) {
                window.location.reload()
              }
            })
            this.router.navigate(['../apartment-home'])
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