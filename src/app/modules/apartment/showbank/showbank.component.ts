import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-showbank',
  templateUrl: './showbank.component.html',
  styleUrls: ['./showbank.component.css']
})
export class ShowbankComponent implements OnInit {

  constructor(private apartmentService: ApartmentService, 
    private router: Router,
    private fb: FormBuilder, 
    private sanitizer: DomSanitizer) { }

  userId : any;
  banklist : any = []

  ngOnInit(): void {

    this.userId  = sessionStorage.getItem('user_id');
    this.apartmentService.getBankByUserId(this.userId).subscribe((res) => {
      console.log('getBankBybkId =>', res);
      if (res) {
        this.banklist = res;
        for(let i=0; i<this.banklist.length; i++){
          this.apartmentService.getBlobThumbnail(this.banklist[i].qrCode).subscribe((res) => {
            let objectURL = URL.createObjectURL(res);
            this.banklist[i].qrCode = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          });
        }

      }
    });
  }
  onDelete(item:any) {
    Swal.fire({
      title: 'ต้องการลบข้อมูล?',
      text: "ต้องการลบข้อมูลใช่หรือไม่!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apartmentService.deletebanks((item.bankId)).subscribe((res) => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
         window.location.reload()
        });
      }
    });
}
}
