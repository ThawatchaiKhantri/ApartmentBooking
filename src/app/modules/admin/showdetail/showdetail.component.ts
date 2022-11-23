import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.component.html',
  styleUrls: ['./showdetail.component.css']
})
export class ShowdetailComponent implements OnInit {

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
  
        // for(let i = 0; i < this.UserList.length; i++){
        //   this.adminService.getBlobThumbnail(this.UserList[i].amImage).subscribe((res) => {
  
        //     let objectURL = URL.createObjectURL(res);       
        //     this.UserList[i].amImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        //   });
        // }
      }
    });
    
  }

  onEdit(item: any) {
    console.log(item.userId);
    this.router.navigate(['showdetailtwo/' + item.userId]);
   }

  
  }