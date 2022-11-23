import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApartmentService } from '../apartment.service';


@Component({
  selector: 'app-editapartment',
  templateUrl: './editapartment.component.html',
  styleUrls: ['./editapartment.component.css']
})
export class EditapartmentComponent implements OnInit {

  constructor(private apartmentService: ApartmentService,
   private router: Router,
   private fb: FormBuilder,
   private activatedroute: ActivatedRoute,) { }

  amId : any;
  apartmentprofile: any = [];

  editApartmentForm = this.fb.group({
    apartmentDetailId: '',
    cataId: '',
    amName: '',
    amAddress: '',
    addOne: '',
    addTwo: '',
    addThings: '',
    amPrice: '',
    amType: '',
    amImage: '',
    amImageUrl: '',
    amId: '',
    revId: '',
    openBooking: '',

   
  });
  ngOnInit(): void {
    this.amId = this.activatedroute.snapshot.paramMap.get('apartmentId');
    console.log('this.amId =>',this.amId);
    this.apartmentService.getApartmentDetailByApartmentId(this.amId).subscribe((res) => {
      console.log('res =>', res);
      if (res) {
        this.amId = res;
        this.editApartmentForm.patchValue(
          {
            apartmentDetailId : res.apartmentDetailId,
            amId : res.amId,
            amName : res.amName,
            amAddress: res.amAddress,
            addOne: res.addOne,
            addTwo: res.addTwo,
            addThings: res.addThings,
            amPrice: res.amPrice,
            amImage: res.amImage,
            amImageUrl: res.amImageUrl,
            openBooking: res.openBooking,
          }
        )
      }
    });
  }
  onSubmit() {
    console.log('data :', this.editApartmentForm.value)


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
        this.apartmentService.updateApartmentdetails(this.editApartmentForm.value,this.editApartmentForm.value.apartmentDetailId).subscribe(res => {
          console.log('Update User res : ', res)
          this.router.navigate(['../showapartment'])
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
