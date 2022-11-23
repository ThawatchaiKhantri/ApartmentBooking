import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-apartmentselectionpage',
  templateUrl: './apartmentselectionpage.component.html',
  styleUrls: ['./apartmentselectionpage.component.css']
})
export class ApartmentselectionpageComponent implements OnInit {

  constructor(private userservice: UserService , 
    private router: Router,
    
    private sanitizer: DomSanitizer) { }

    listCenter: any;
    userId: any;
    provicne: any;
    listSearch: any
    searchFlg : any;

  ngOnInit(): void {
    // this.userId = sessionStorage.getItem("user_id")
    this.userservice.getUserByroleId().subscribe(res =>{
      console.log('Service =>', res)
      if (res) {
        this.listCenter = res;
        this.searchFlg = false;
        for(let i = 0; i < this.listCenter.length; i++){
          this.userservice.getBlobThumbnail(this.listCenter[i].amImage).subscribe((res) => {
    
            let objectURL = URL.createObjectURL(res);       
            this.listCenter[i].amImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          });
      }
    }
  })
 
  } 
}
