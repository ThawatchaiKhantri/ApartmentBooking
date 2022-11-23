import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {

  
  listUsers: any = []

constructor(private adminService: AdminService,
 private router: Router) {}

 ngOnInit(): void {
   this.adminService.getRoleId(2,2).subscribe((res) => {
     console.log('res =>', res);
     if (res) {
       this.listUsers = res;
     }
   });
}
onDelete(item:any) {
  Swal.fire({
    title: 'ต้องการลบข้อมูล?',
    text: "ต้องการลบข้อมูลใช่หรือไม่!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes,delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.adminService.deleteUsers((item.userId)).subscribe((res) => {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
       window.location.reload()
      });
    }
  });
}

onEdit(item: any) {
 console.log(item.userId);
 this.router.navigate(['admin/appapartmentyes/' + item.userId]);
}
}