import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from '../model/RegisterModel';


import { RegisterapartmentService } from './registerapartment.service';

@Component({
  selector: 'app-registerapartment',
  templateUrl: './registerapartment.component.html',
  styleUrls: ['./registerapartment.component.css']
})
export class RegisterapartmentComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerapartmentService: RegisterapartmentService
  ) { }

  apartmentForm = this.fb.group({
    username: [''],
    password: [''],
    prefix: [''],
    fname: [''],
    lname: [''],
    gender: [''],
    email: [''],
    phone: [''],
    province: [''],
    tumbon: [''],
    district: [''],
    zipCode: [''],
    address: [''],
    birthday: [''],
    amName:[''],
    picture:[''],
    cardId:[''],

  });
  zipCodeList :any ;
  districtsList :any ;
  amphuresList :any ;
  provincesList :any ;
  districts : any;
  amphures : any;
  provinces : any;

  ngOnInit(): void {
  }
  onKeyUp(event : any){

    console.log('testEvent' , event.target.value);
    this.findZipcodesById(event.target.value);
  }

  findZipcodesById(data :any){
    this.registerapartmentService.findZipcodesById(data).subscribe((res) => {
      if(res){
        this.zipCodeList = res;
        this.findDistrictsById(this.zipCodeList.districtCode);
      }
      
    });
  }

  findDistrictsById(data :any){
    this.registerapartmentService.findDistrictsById(data).subscribe((res) => {
      if(res){
        this.districtsList = res;
        this.districts = this.districtsList.districtCode;
        this.findAmphuresById(this.districtsList.refAmphurId);
      }
      
    });
  }

  findAmphuresById(data :any){
    this.registerapartmentService.findAmphuresById(data).subscribe((res) => {
      if(res){
        this.amphuresList = res;
        this.amphures = this.amphuresList.amphurId
        this.findProvincesById(this.amphuresList.refProvinceId)
      }
      
    });
  }

  findProvincesById(data :any){
    this.registerapartmentService.findProvincesById(data).subscribe((res) => {
      if(res){
        
        this.provincesList = res;
        this.provinces = this.provincesList.provinceId
      }
    });
  }

  onFileSelect(event: any) {

    const file = event.target.files[0];
    this.apartmentForm.value.picture = file;
    console.log('file event :' ,this.apartmentForm.value.picture)
}

  onSubmit() {

    const formData = new FormData();
    formData.append('username', this.apartmentForm.value.username);
    formData.append('password', this.apartmentForm.value.password);
    formData.append('userTitle', this.apartmentForm.value.prefix);
    formData.append('userFname', this.apartmentForm.value.fname);
    formData.append('userLname', this.apartmentForm.value.lname);
    formData.append('cardId',this.apartmentForm.value.cardId);
    formData.append('email', this.apartmentForm.value.email);
    formData.append('phone', this.apartmentForm.value.phone);
    formData.append('zipCode', this.apartmentForm.value.zipCode);
    formData.append('address', this.apartmentForm.value.address);
    formData.append('pvnId', this.apartmentForm.value.province);
    formData.append('sdtId',  this.apartmentForm.value.tumbon);
    formData.append('disId',   this.apartmentForm.value.district);
    formData.append('picture',  this.apartmentForm.value.picture.name);
    formData.append('file',  this.apartmentForm.value.picture);
    formData.append('amName',  this.apartmentForm.value.amName);
    formData.append('recordStatus',  '2');
    formData.append('roleId',  '2');



    console.log(formData)
    

    this.registerapartmentService.saveRegisterApartment(formData).subscribe((res)=>{
      if(res){
        alert('บันทึกสำเร็จแล้ว')
        this.router.navigate(['home/login']).then(() => {
          window.location.reload()
        });
      }
    });
  }

}

