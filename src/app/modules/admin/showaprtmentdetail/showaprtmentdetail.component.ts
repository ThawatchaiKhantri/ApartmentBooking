import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-showaprtmentdetail',
  templateUrl: './showaprtmentdetail.component.html',
  styleUrls: ['./showaprtmentdetail.component.css']
})
export class ShowaprtmentdetailComponent implements OnInit {

  constructor(private adminService: AdminService, 
    private router: Router,
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer,) {}
    
    userId : any; 
    UserList: any = [];
    imageBlobUrl :  any;
    amImage: any
  
    ngOnInit(): void {
      this.userId  = sessionStorage.getItem('user_id');
      this.userId = this.activatedroute.snapshot.paramMap.get('userId');
      console.log('this.userId =>', this.userId);
      this.adminService.getUserByUserId(this.userId).subscribe((res) => {
        console.log('UserList =>', res);
      if (res) {
        this.UserList = res;
  
        for(let i = 0; i < this.UserList.length; i++){
          this.adminService.getBlobThumbnail(this.UserList[i].picture).subscribe((res) => {
  
            let objectURL = URL.createObjectURL(res);       
            this.UserList[i].pictureUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          });
        }
      }
    });
    
  }

  onEdit(item: any) {
    console.log(item.userId);
    this.router.navigate(['admindetailapartment/' + item.userId]);
   }
  }