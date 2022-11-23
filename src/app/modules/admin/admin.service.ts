import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiEndPoint = environment.apiEndPoint;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private http: HttpClient) { }


  getUsers(): Observable<any>{
    return this.http.get(apiEndPoint.concat('/users')); 
  }
  deleteUsers(userId: any): Observable<any>{
    return this.http.delete(apiEndPoint.concat('/users/'+userId))
  }
    getUserById(userId: any): Observable<any>{
    return this.http.get<any>(apiEndPoint.concat('/users/' + userId))
  }
  updateUsers(data: any, userId: any): Observable<any>{
    const body=JSON.stringify(data);
    return this.http.put<any>(apiEndPoint.concat('/users/' + userId),body,httpOptions)}


    getUserDetail(): Observable<any>{
      return this.http.get(apiEndPoint.concat('/userDetails')); 
    }


    getRoleId(roleId: any , recordStatus:any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/users/roleId?roleId='  + roleId + '&&recordStatus='+ recordStatus)); 
    }

    getBlobThumbnail(fileName: string): Observable<Blob> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'    
      });
      return this.http.get<Blob>(apiEndPoint.concat('/loading/' + fileName ),
         {headers: headers, responseType: 'blob' as 'json' });
    }

    getUserByUserId(userId: any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/userDetails/showByUserId/' + userId))
    }

    
    updateRecords(data: any, userId: any): Observable<any>{
      const body=JSON.stringify(data);
      return this.http.put<any>(apiEndPoint.concat('/userDatas/' + userId),body,httpOptions)
    }


    getUserdetailsByUserId(userId : any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/userDetails/getuser/' + userId)); 
    }

    
}
