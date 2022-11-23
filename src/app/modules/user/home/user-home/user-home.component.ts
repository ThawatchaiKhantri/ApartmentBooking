import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService: UserService, 
    private router: Router,
    private fb: FormBuilder, 
    private sanitizer: DomSanitizer) { }

    provinceList :any = [];
    province: any;
    isSearch : any;
    apartmentList : any;
    ApartmentList : any = [];
    imageBlobUrl :  any;
    userId : any;
    amId : any;
    
    searchFlg : any;
    listCenter: any;

  ngOnInit(): void {
    this.provinceList
    this.isSearch = false;
    this.userService.getProvinceAll().subscribe((res) =>{
      console.log('res =>', res);
      if (res) {
        this.provinceList = res;
      }
    });

  }

  onSearch(){
    this.apartmentList = null;
    this.isSearch = true;
    if(null != this.province && '' != this.province){
      
      

      this.userService.getUserdetailByProvinceId(this.province).subscribe((res) =>{
        console.log('res =>',  res);
        if (res.length > 0) {
          this.apartmentList = res;
          

          for(let i=0; i< this.apartmentList.length; i++){

            this.userService.getBlobThumbnail(this.apartmentList[i].picture).subscribe((res) => {
              let objectURL = URL.createObjectURL(res);
              this.apartmentList[i].pictureUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            });

           }
        }
      });

    }else{
      this.isSearch = false;
    }
    console.log('this.isSearch' , this.apartmentList)
  }

  intApartmentData(amId : any){
    this.userService.getApartmentByAmId(amId).subscribe((res) => {
      console.log('ApartmentList =>', res);
      if (res) {
       this.ApartmentList = res;

       for(let i=0; i< this.ApartmentList.length; i++){
        
        this.userService.getBlobThumbnail(this.ApartmentList[i].picture).subscribe((res) => {
          let objectURL = URL.createObjectURL(res);
          this.ApartmentList[i].pictureUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
       
       }
      }
    });
  }
  onEdit(item: any) {
    console.log(item.amId);
    this.router.navigate(['user/apartmentdetailpages/' + item.amId]);
  }
}
