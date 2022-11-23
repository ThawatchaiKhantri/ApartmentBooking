import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-bankpage',
  templateUrl: './bankpage.component.html',
  styleUrls: ['./bankpage.component.css']
})
export class BankpageComponent implements OnInit {

  constructor(private apartmentService: ApartmentService, 
    private router: Router,
    private fb: FormBuilder,) { }

    
  bankId : any;
  userId: any;

  addbankForm = this.fb.group({
    bankId: '',
	  bkFirstname: '',
    userId: '',
	  bkAccountNumber: '',
	  bankName: '',
	  qrCode: '',
	  recordStatus: '',
  });


  ngOnInit(): void {
    this.userId  = sessionStorage.getItem('user_id');

    console.log('user_id', this.userId)

    this.apartmentService.getUserDetailById(this.userId).subscribe((res) => {
      console.log('res =>', res);
      if (res) {
        this.userId = res.userId
      }
    });
  }
  onFileSelect(event: any) {

    const file = event.target.files[0];
    this.addbankForm.value.qrCode = file;
    console.log('file event :' ,this.addbankForm.value.qrCode)
}
  
    onSubmit(){
  
      const formData = new FormData();
      formData.append('bkFirstname', this.addbankForm.value.bkFirstname);
      formData.append('bkAccountNumber', this.addbankForm.value.bkAccountNumber);
      formData.append('bankName', this.addbankForm.value.bankName);
      formData.append('qrCode', this.addbankForm.value.qrCode.name);
      formData.append('file', this.addbankForm.value.qrCode);
      // formData.append('bkId', this.bankId);
      formData.append('userId', this.userId);
      formData.append('recordStatus','1');
  
      new Response(formData).text().then(console.log)
      Swal.fire({
        title: 'ต้องการเพิ่มข้อมูล?',
        text: "คุณต้องการเพิ่มข้อมูลใช่หรือไม่!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.apartmentService.saveBank( formData ).subscribe(res => {
            console.log(formData)
              Swal.fire(
                'Save!',
                 'Your file has been deletad.',
                 'success',
              )
              this.router.navigate(['../showbank'])
            });
        }
      })
    }
    }
  