import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnInit {

  constructor(
    private apartmentService: ApartmentService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    
    ) { }

  apartmentList: any = [];
  userId : any;
  traderDt : any;
  slipUrl : any;
  apartmentDt : any;

  ngOnInit(): void {

    this.userId = sessionStorage.getItem('user_id');

    this.apartmentService.getUserDetailById(this.userId).subscribe(res =>{
      console.log('res =>',res)
      if(res){
        this.apartmentService.getPaymentByAmId(res.amId).subscribe(res =>{
          console.log('res =>',res)
          if(res){
            this.apartmentList =res;
          }
        
        });
      }
    
    });

    
  }
  onPopup(item: any) {
    
    this.apartmentDt = item;
    console.log(this.apartmentDt);
    this.apartmentService.getBlobThumbnail(this.apartmentDt.payImage).subscribe((res) => {
    
      let objectURL = URL.createObjectURL(res);       
      this.slipUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  onSave(item :any){
    item.recordStatus = '2'
    this.apartmentService.updateStatus(item , item.payId).subscribe((res) => {
      Swal.fire('Success!', 'Your file has been Success.', 'success');
      window.location.reload();
      this.ngOnInit();
    });
  }
  onCancel(item :any){
    item.recordStatus = '3'
    this.apartmentService.updateStatus(item , item.payId).subscribe((res) => {
      Swal.fire('Success!', 'Your file has been Success.', 'success');
      window.location.reload();
      this.ngOnInit();
    });
  }
//   onDelete(item:any) {
//     Swal.fire({
//       title: 'ต้องการปฏิเสธ?',
//       text: "ต้องการปฏิเสธใช่หรือไม่!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         this.apartmentService.deleteOrderDetails(Number(item.oddId)).subscribe((res) => {
//           Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
//           this.ngOnInit();
//         });
//       }
//     });
// }
}