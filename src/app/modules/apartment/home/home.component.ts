import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apartmentService: ApartmentService, 
    private router: Router,
    private fb: FormBuilder,) {}
    
  apartmentprofile: any = [];
  userId : any;

  apartmentprofileForm = this.fb.group({
    Id: '',
    userId: '',
    userTitle: '',
    userFname: '',
    userLname: '',
    address: '',
    phone: '',
    email: '',
    cardId: '',
    userGender: '',
    userBirthday: '',
    zipCode: '',
    pvnId: '',
    provinceNameTh:'',
    amphurNameTh:'',
    districtNameTh:'',
    sdtId: '',
    disId: '',
    amName: '',
    picture: '',
    idBank: '',
    recordStatus: '',

  });

  ngOnInit(): void {
    this.userId  = sessionStorage.getItem('user_id');

    console.log('user_id', this.userId)

    this.apartmentService.getUserDatas(this.userId).subscribe((res) => {
      console.log('res =>', res);
      if (res) {
        this.apartmentprofile = res;
        this.apartmentprofileForm.patchValue(
          {
            userFname: res.userFname,
            userLname: res.userLname,
            amName: res.amName,
            address: res.address,
            zipCode: res.zipCode,
            pvnId: res.pvnId,
            provinceNameTh: res.provinceNameTh,
            amphurNameTh:res.amphurNameTh,
            districtNameTh:res.districtNameTh,
            sdtId: res.sdtId,
            disId: res.disId,
            phone: res.phone,
            email: res.email,
          }
        )
      }
    });
  }
}
