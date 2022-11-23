import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-addapartment',
  templateUrl: './addapartment.component.html',
  styleUrls: ['./addapartment.component.css']
})
export class AddapartmentComponent implements OnInit {

  constructor(private apartmentService: ApartmentService, 
    private router: Router,
    private fb: FormBuilder,) { }

  amId : any;
  userId: any;
  addapartmentForm = this.fb.group({
    apartmentDetailId: '',
    amId: '',
    cataId: '',
    amName: '',
    amAddress: '',
    addOne: '',
    addTwo: '',
    addThings: '',
    amPrice: '',
    amType: '',
    amImage: '',
    openBooking:'',
    recordStatus: '',
    
  });


  ngOnInit(): void {
    this.userId  = sessionStorage.getItem('user_id');

    console.log('user_id', this.userId)

    this.apartmentService.getUserDetailById(this.userId).subscribe((res) => {
      console.log('res =>', res);
      if (res) {
        this.amId = res.amId
      }
    });
  }
  onFileSelect(event: any) {

    const file = event.target.files[0];
    this.addapartmentForm.value.amImage = file;
    console.log('file event :' ,this.addapartmentForm.value.amImage)
}

  onSubmit(){

    const formData = new FormData();
    formData.append('amName', this.addapartmentForm.value.amName);
    formData.append('amAddress', this.addapartmentForm.value.amAddress);
    formData.append('addOne', this.addapartmentForm.value.addOne);
    formData.append('addTwo', this.addapartmentForm.value.addTwo);
    formData.append('addThings', this.addapartmentForm.value.addThings);
    formData.append('openBooking', this.addapartmentForm.value.openBooking);
    formData.append('amPrice', this.addapartmentForm.value.amPrice);
    formData.append('amImage', this.addapartmentForm.value.amImage.name);
    formData.append('file', this.addapartmentForm.value.amImage);
    formData.append('amId', this.amId);
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
        this.apartmentService.saveApartment( formData ).subscribe(res => {
          console.log(formData)
            Swal.fire(
              'Save!',
               'Your file has been deletad.',
               'success',
            )
           this.router.navigate(['apartment/showapartment'])
          });
      }
    })
  }
  }
