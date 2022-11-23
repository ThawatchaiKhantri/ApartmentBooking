import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-apartmentdetailpage',
  templateUrl: './apartmentdetailpage.component.html',
  styleUrls: ['./apartmentdetailpage.component.css']
})
export class ApartmentdetailpageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,private fb: FormBuilder,private activatedroute: ActivatedRoute,private sanitizer: DomSanitizer,) { }
  userId : any; 
  amId : any;
  ApartmentList: any = [];
  imageBlobUrl :  any;
  amImage: any

  ngOnInit(): void {
    this.userId  = sessionStorage.getItem('user_id');
    this.amId = this.activatedroute.snapshot.paramMap.get('amId');
    console.log('this.amId =>', this.amId);
    this.userService.getApartmentByAmId(this.amId).subscribe((res) => {
      console.log('ApartmentList =>', res);
    if (res) {
      this.ApartmentList = res;

      for(let i = 0; i < this.ApartmentList.length; i++){
        this.userService.getBlobThumbnail(this.ApartmentList[i].amImage).subscribe((res) => {

          let objectURL = URL.createObjectURL(res);       
          this.ApartmentList[i].amImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
      }
    }
  });
  
  
}
getImage(fileName : any){
  this.userService.getBlobThumbnail(fileName).subscribe((res) => {
    let objectURL = URL.createObjectURL(res);       
          this.imageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  });
}


onEdit(item: any) {
  console.log(item.amId);
  this.router.navigate(['user/bookingdetails/' + item.apartmentId]);
}
}


