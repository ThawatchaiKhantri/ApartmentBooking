import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';
import { UserDetailDto } from '../adminmodule/UserDetailDto';

@Component({
  selector: 'app-appapartment',
  templateUrl: './appapartment.component.html',
  styleUrls: ['./appapartment.component.css']
})
export class AppapartmentComponent implements OnInit {

  constructor(private adminService: AdminService, 
    private router: Router,
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer,) {}
    
    userId : any; 
    userList: any = [];
    imageBlobUrl :  any;
    userImage: any
   
   
    rofileForm = this.fb.group({

    Id:'',
	userId:'',
	userTitle:'',
	userFname:'',
	userLname:'',
	address:'',
	phone:'',
	email:'',
	cardId:'',
	userGender:'',
	userBirthday:'',
	zipCode:'',
	pvnId:'',
	sdtId:'',
	disId:'',
	amName:'',
	picture:'',
	idBank:'',
	recordStatus:'',
	roleId:'',
	amId:'',
  username: '',
  password:'',

    });
    ngOnInit(): void {
      this.userId = this.activatedroute.snapshot.paramMap.get("userId");
        this.initWorksDataforEdit(this.userId)
      }
      initWorksDataforEdit(userId: any){
  
        this.adminService.getUserdetailsByUserId(userId).subscribe((res) => {
          if (res) {
            this.rofileForm.patchValue({
              id: res.id,
              amId: res.amId,
              amName: res.amName,
              userTitle: res.userTitle,
              userFname: res.userFname,
              userLname: res.userLname,
              userGender: res.userGender,
              address: res.address,
              phone: res.phone,
              picture: res.picture,
              email: res.email,
              userBirthday: res.userBirthday,
              zipCode: res.zipCode,
              sdtId: res.sdtId,
              disId: res.disId,
              pvnId: res.pvnId,
              username: res.username,
              password: res.password,
              
              
            })
  
  
            }
          })
    }
  getImage(fileName : any){
    this.adminService.getBlobThumbnail(fileName).subscribe((res) => {
      let objectURL = URL.createObjectURL(res);
            this.userImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    });
  }
  
  
  

  onSubmit() {
    const registerModel: UserDetailDto  =  this.rofileForm.value as UserDetailDto;
    registerModel.recordStatus = '1'
    registerModel.userId = this.userId

    console.log(registerModel)
    
      Swal.fire({
       title: 'คุณต้องการอนุมัติใช่หรือไม่',
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#56C596' ,
       cancelButtonColor: '#d33',
       confirmButtonText: 'ยืนยัน',
       cancelButtonText: 'ยกเลิก'
     }).then((result) => {
       if (result.isConfirmed) {
         this.adminService.updateRecords(registerModel , registerModel.userId).subscribe(res => {
          Swal.fire({
            icon: 'success',
            title: 'บันทึกข้อมูลสำเร็จ',
            text: '',
            confirmButtonText: 'ตกลง',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['admin/addrole']);
            } 
          })

         });

       }
     })
  }
  }
  