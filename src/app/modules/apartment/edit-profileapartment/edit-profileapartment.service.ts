import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const apiEndPoint = environment.apiEndPoint;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EditProfileapartmentService {

constructor(private http: HttpClient) { }

getUserDetailById(userId: any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/userDetails/' + userId))
}
updateUserdetails(data: any, userId: any): Observable<any>{
  const body=JSON.stringify(data);
  return this.http.put<any>(apiEndPoint.concat('/userDetails/' + userId),body,httpOptions)
}

}
