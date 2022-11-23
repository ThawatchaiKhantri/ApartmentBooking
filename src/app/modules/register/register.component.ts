import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModel } from '../model/RegisterModel';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) { }

  regisForm = this.fb.group({
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
    this.registerService.findZipcodesById(data).subscribe((res) => {
      if(res){
        this.zipCodeList = res;
        this.findDistrictsById(this.zipCodeList.districtCode);
      }
      
    });
  }

  findDistrictsById(data :any){
    this.registerService.findDistrictsById(data).subscribe((res) => {
      if(res){
        this.districtsList = res;
        this.districts = this.districtsList.districtCode;
        this.findAmphuresById(this.districtsList.refAmphurId);
      }
      
    });
  }

  findAmphuresById(data :any){
    this.registerService.findAmphuresById(data).subscribe((res) => {
      if(res){
        this.amphuresList = res;
        this.amphures = this.amphuresList.amphurId
        this.findProvincesById(this.amphuresList.refProvinceId)
      }
      
    });
  }

  findProvincesById(data :any){
    this.registerService.findProvincesById(data).subscribe((res) => {
      if(res){
        
        this.provincesList = res;
        this.provinces = this.provincesList.provinceId
      }
    });
  }

  onSubmit() {

    const model = new RegisterModel();
    model.username = this.regisForm.value.username;
    model.password = this.regisForm.value.password;
    model.userTitle = this.regisForm.value.prefix;
    model.userFname = this.regisForm.value.fname;
    model.userLname = this.regisForm.value.lname;
    model.userGender = this.regisForm.value.gender;
    model.email = this.regisForm.value.email;
    model.phone = this.regisForm.value.phone;
    model.zipCode = this.regisForm.value.zipCode;
    model.address = this.regisForm.value.address;
    model.pvnId = this.regisForm.value.province;
    model.sdtId = this.regisForm.value.tumbon;
    model.disId = this.regisForm.value.district;
    model.userBirthday = this.regisForm.value.birthday;
    model.recordStatus = '1'
    model.roleId = 1

    console.log(model)
    

    this.registerService.saveRegister(model).subscribe((res)=>{
      if(res){
        alert('บันทึกสำเร็จแล้ว')
        this.router.navigate(['home/login']).then(() => {
          window.location.reload()
        });
      }
    });
  }

}
