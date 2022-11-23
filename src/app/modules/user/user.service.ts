import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiEndPoint = environment.apiEndPoint;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //ดึงแก้ไข User
  getUserDetailById(userId: any): Observable<any>{
    return this.http.get(apiEndPoint.concat('/userDetails/' + userId))
  }
  updateUserdetails(data: any, userId: any): Observable<any>{
    const body=JSON.stringify(data);
    return this.http.put<any>(apiEndPoint.concat('/userDetails/' + userId),body,httpOptions)
  }


    // create
    saveBooking(data: any): Observable<any> {
      return this.http.post<any>(apiEndPoint + '/Bookings', JSON.stringify(data), httpOptions)
    }

    getUserByroleId(): Observable<any>{
      return this.http.get(apiEndPoint.concat('/ApartmentDetails'));
    }

    getBlobThumbnail(fileName: string): Observable<Blob> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'    
      });
      return this.http.get<Blob>(apiEndPoint.concat('/loading/' + fileName ),
         {headers: headers, responseType: 'blob' as 'json' });
    }

    //จังหวัด
    getProvinceAll(): Observable<any>{
      return this.http.get(apiEndPoint.concat('/master/province'));
    }

    getUserdetailByProvinceId(pvnId : any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/userDetails/findByProvniceId/' + pvnId));
    }

    getApartmentByAmId(amId: any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/ApartmentDetails/showapartmentById/' + amId))
    }

    getApartmentByApartmentId(apartmentId: any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/ApartmentDetails/apartmentdetail/' + apartmentId))
    }

    getBankByUserId(userId : any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/banks/getbanksuser/' + userId)); 
    }

    // create
    savePaymentBooking(formData: FormData): Observable<any> {
      return this.http.post<any>(apiEndPoint + '/payments/savePaymentBooking', formData)
    }

    // ดึงการจอง
    getPaymentByUserId(userId: any, recordStatus : any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/payments/userId?userId=' + userId + '&&recordStatus='+ recordStatus));
    }

    //แก้ไขรหัสผ่าน
    getUserById(userId: any): Observable<any>{
      return this.http.get(apiEndPoint.concat('/users/' + userId))
    }

    updatePassword(amId : any , data : any){
      return this.http.put<any>(apiEndPoint.concat('/users/updatepassword/' + amId),JSON.stringify(data), httpOptions)
    }
    

  }


  
