import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.anthenLogin(this.loginForm.value.username , this.loginForm.value.password).subscribe((res) => {
      if(res){

        sessionStorage.setItem('user_id', res.userId),{}
        sessionStorage.setItem('user_role', this.getRole(res.roleId));

      }else{
        Swal.fire(
          'Login Fail!',
          'Role is Not Mapping in System!'          
        )
      }
    });
  }

  getRole(roleId: any) {
    let role = ''; 
    console.log(roleId)
    switch(roleId) {
      case 1:
        role = 'USER';
        this.router.navigate(['user/home']).then(() => {
          window.location.reload()
        });
        break;
      case 2:
        role = 'APARTMENT'; 
        this.router.navigate(['apartment/apartment-home']).then(() => {
          window.location.reload()
        });
        break;
      case 3:
        role = 'ADMIN';
        this.router.navigate(['admin/homeadmin']).then(() => {
          window.location.reload()
        });
        break;
      default:
        Swal.fire(
          'Login Fail!',
          'Role is Not Mapping in System!'          
        )
        break;     
    }
    return role;
  }

}
