
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiEndPoint = environment.apiEndPoint;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

constructor(private http: HttpClient) { }

getUserdetails(): Observable<any>{
  return this.http.get(apiEndPoint.concat('/userDetails')); 
}
deleteUserdetails(id: any): Observable<any>{
  return this.http.delete(apiEndPoint.concat('/userDetails/'+ id))
}

// ดึง จังหวัดมาโชว์
getUserDatas(userId: any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/userDatas/userId?userId=' + userId))
}
// ดึง รายละเอียดฮพาร์ทเมนต์
getUserDetailById(userId: any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/userDetails/' + userId))
}

getUserDetailByUserId(userId: any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/userDetails/getuser' + userId))
}

getPaymentByAmId(amid : any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/payments/getPaymentByAmId/' + amid)); 
}

updateUserdetails(data: any, id: any): Observable<any>{
  const body=JSON.stringify(data);
  return this.http.put<any>(apiEndPoint.concat('/userDetails/' + id),body,httpOptions)
}

  
saveApartment(fromData : FormData): Observable<any> {
   return this.http.post<any>(apiEndPoint.concat('/ApartmentDetails/saveapartment'),fromData);
 }


 getApartmentByAmId(amId: any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/ApartmentDetails/showapartment/' + amId))
}

updateApartmentdetails(data: any, amId: any): Observable<any>{
  const body=JSON.stringify(data);
  return this.http.put<any>(apiEndPoint.concat('/ApartmentDetails/' + amId),body,httpOptions)
}

getBlobThumbnail(fileName: string): Observable<Blob> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'    
  });
  return this.http.get<Blob>(apiEndPoint.concat('/loading/' + fileName ),
     {headers: headers, responseType: 'blob' as 'json' });
}

getApartmentDetailByApartmentId(apartmentId: any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/ApartmentDetails/apartmentdetail/' + apartmentId))
}

//เพิ่ม Bank
saveBank(fromData : FormData): Observable<any>{
  return this.http.post(apiEndPoint.concat('/banks/saveBankss') , fromData); 
}
//ลบ Bank
deletebanks(bankId: any): Observable<any>{
  return this.http.delete(apiEndPoint.concat('/banks/'+ bankId))
}
//ดึง Bank
getBankByUserId(userId : any): Observable<any>{
  return this.http.get(apiEndPoint.concat('/banks/getbanksuser/' + userId)); 
}

updateStatus(data: any, id: any): Observable<any>{
  const body=JSON.stringify(data);
  return this.http.put<any>(apiEndPoint.concat('/payments/updateStatus/' + id),body,httpOptions)
}

}
