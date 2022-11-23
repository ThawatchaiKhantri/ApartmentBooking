import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { UserModel } from '../usermodule/BookingModel';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})
export class BookingdetailComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private fb: FormBuilder,private activatedroute: ActivatedRoute,private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    ) { }
  userId : any; 
  apartmentId : any;
  ApartmentList: any = [];
  imageBlobUrl :  any;
  amImage: any;


  // cal
  dayNumber : any;
  unitAmt : any;
  unitSummary : any;
  qrCodeUrl : any;


  bookingDtForm = this.formBuilder.group({

    userId: '',
    userFname: '',
    userLname: '',
    phone: '',
    email: '',
    numberRoom: '',
    numberBed: '',
    checkIn: '',
    checkOut: '',
    bankName: '',
    bkFirstname: '',
    payImage: '',
    bankId : '',
    amId : '',
    apartmentId : '',
    bkAccountNumber : '',
    
  });

  ngOnInit(): void {
    this.userId  = sessionStorage.getItem('user_id');


    this.userService.getUserDetailById(this.userId).subscribe(res =>{
      console.log('res =>',res)
      if(res){
        this.bookingDtForm.patchValue({
          userId : res.userId,
          userFname: res.userFname,
          userLname: res.userLname,
          email: res.email,
          phone: res.phone,
          numberRoom : 0
        });
      }
    
    });

    this.apartmentId = this.activatedroute.snapshot.paramMap.get('apartmentId');
    console.log('this.apartmentId =>', this.apartmentId);
    this.userService.getApartmentByApartmentId(this.apartmentId).subscribe((res) => {
      console.log('ApartmentList =>', res);
    if (res) {
     this.ApartmentList = res;

     this.bookingDtForm.patchValue({
      amId : res.amId,
      apartmentId: res.apartmentId
  });



     if(null != res.bankDto){
        this.userService.getBlobThumbnail(res.bankDto.qrCode).subscribe((res) => {
          let objectURL = URL.createObjectURL(res);       
          this.qrCodeUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });

        this.bookingDtForm.patchValue({
            bankName : res.bankDto.bankName,
            bkFirstname: res.bankDto.bkFirstname,
            bkAccountNumber: res.bankDto.bkAccountNumber,
            bankId: res.bankDto.bankId
        });
     }


     this.amImage = this.getImage(res.amImage)
     this.unitAmt = res.amPrice
    }
    });
}
  getImage(fileName : any){
    this.userService.getBlobThumbnail(fileName).subscribe((res) => {
      let objectURL = URL.createObjectURL(res);       
            this.imageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }


  onCalDayNum(event : any){
    
    if(null != this.bookingDtForm.value.checkIn){
      const checkIn = new Date(this.bookingDtForm.value.checkIn)
      const checkOut = new Date(event.target.value);
      var num = Math.floor((Date.UTC(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate()) - Date.UTC(checkIn.getFullYear(), checkIn.getMonth(), checkIn.getDate()) ) /(1000 * 60 * 60 * 24));
      this.dayNumber = num;
      this.onCalUnit();
    }
  }

  onCalUnit(){

    if(null != this.dayNumber && null != this.bookingDtForm.value.numberRoom){
      this.unitSummary = (Number(this.bookingDtForm.value.numberRoom) * this.unitAmt ) * this.dayNumber
    }
  }

  onCalUnitChage(event : any){

    if(0 !== event.target.value && null != this.dayNumber){
      this.unitSummary = (Number(event.target.value) * this.unitAmt ) * this.dayNumber
    }
  }

  onFileSelect(event: any) {

    const file = event.target.files[0];
    this.bookingDtForm.value.payImage = file;
  }

  onSubmit(){
    const formData = new FormData();

    formData.append('userId', this.bookingDtForm.value.userId);
    formData.append('bankId', this.bookingDtForm.value.bankId);
    formData.append('amId', this.bookingDtForm.value.amId);
    formData.append('apartmentId', this.bookingDtForm.value.apartmentId);
    formData.append('payAmount', this.unitSummary);
    formData.append('amPrice', this.unitAmt);
    formData.append('amNumber', this.bookingDtForm.value.numberRoom);
    formData.append('bedType', this.bookingDtForm.value.numberBed);
    formData.append('checkIn', this.bookingDtForm.value.checkIn);
    formData.append('checkOut',this.bookingDtForm.value.checkOut);
    formData.append('checkNumber',this.dayNumber);
    formData.append('recordStatus','1');

    formData.append('payImage',this.bookingDtForm.value.payImage.name);
    formData.append('file',this.bookingDtForm.value.payImage);

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
        this.userService.savePaymentBooking( formData ).subscribe(res => {
          console.log(formData)
            Swal.fire(
              'Save!',
               'Your file has been deletad.',
               'success',
            )
          });
      }
    })
  }




}