import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listUsers: any = []

constructor(private adminService: AdminService,
 private router: Router) {}

 ngOnInit(): void {
   this.adminService.getRoleId(1,1).subscribe((res) => {
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
 this.router.navigate(['admin/showdetail/' + item.userId]);
}
}