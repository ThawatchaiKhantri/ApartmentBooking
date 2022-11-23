import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-showaprtment',
  templateUrl: './showaprtment.component.html',
  styleUrls: ['./showaprtment.component.css']
})
export class ShowaprtmentComponent implements OnInit {

  constructor(private apartmentService: ApartmentService, 
    private router: Router,
    private fb: FormBuilder,
    private sanizer: DomSanitizer) { }
  apartmentprofile: any = [];
  userId : any;
  amId : any;
  ApartmentList : any = [];
  imageBlobUrl :  any;
  ngOnInit() {
    this.userId  = sessionStorage.getItem('user_id');
    console.log('user_id', this.userId)
    this.apartmentService.getUserDetailById(this.userId).subscribe((res) => {
      console.log('res =>', res);
      if (res) {
        this.apartmentprofile = res;
        this.amId = res.amId;
        this.intApartmentData(res.amId);
      }
    });
  }

  getImage(){
    
  }

  onEdit(item:any){
    console.log(item.amId);
    this.router.navigate(['edit-apartment/' + item.apartmentId]);
  }

  intApartmentData(amId : any){
    this.apartmentService.getApartmentByAmId(amId).subscribe((res) => {
      console.log('ApartmentList =>', res);
      if (res) {
       this.ApartmentList = res;

       for(let i=0; i< this.ApartmentList.length; i++){
        
        this.apartmentService.getBlobThumbnail(this.ApartmentList[i].amImage).subscribe((res) => {
          let objectURL = URL.createObjectURL(res);
          this.ApartmentList[i].amImageUrl = this.sanizer.bypassSecurityTrustUrl(objectURL);
        });
       
       }
      }
    });
  }
}