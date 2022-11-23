import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdmindetailapartmentService } from './admindetailapartment.service';

@Component({
  selector: 'app-admindetailapartment',
  templateUrl: './admindetailapartment.component.html',
  styleUrls: ['./admindetailapartment.component.css']
})
export class AdmindetailapartmentComponent implements OnInit {

  constructor(private admindetailapartmentService: AdmindetailapartmentService, 
    private router: Router,
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,) {}
 

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
      cardId: '',
      
    });

  userId : any;
  pipe = new DatePipe('en-US');
  isUpdate : any;
  UserList: any = [];


  ngOnInit(): void {
    this.userId  = sessionStorage.getItem('user_id');
    this.userId = this.activatedroute.snapshot.paramMap.get('userId');
    console.log('this.userId =>', this.userId);
    this.admindetailapartmentService.getUserDetailById(this.userId).subscribe((res) => {
      console.log('UserList =>', res);
      if (res) {
      this.UserList = res;
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
        cardId: res.cardId,
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

  onSubmit() {
    console.log('data :', this.userprofileForm.value)
    Swal.fire({
      title: 'ยืนยันการทำรายการ',
      text: "ต้องการบันทึกข้อมูลหรือไม่ ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        this.admindetailapartmentService.updateUserdetails(this.userprofileForm.value,this.userprofileForm.value.userId).subscribe(res => {
          console.log('Update User res : ', res)
          this.router.navigate(['../apartmentdetail'])
        });
        Swal.fire({
          icon: 'success',
          title: 'บันทึกข้อมูลสำเร็จ',
          text: '',
          confirmButtonText: 'ปิดหน้าต่าง',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload()
          } else if (result.isDismissed) {
            window.location.reload()

          }
        })
      }
    })

  }
  
}