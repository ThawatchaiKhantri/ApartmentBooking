import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiEndPoint = environment.apiEndPoint;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class RegisterapartmentService {

  constructor(private http: HttpClient) { }

  // create
  saveRegisterApartment(fromData : FormData): Observable<any> {
    return this.http.post<any>(apiEndPoint + '/userDetails/saveShop',fromData)
  }

  getBlobThumbnail(fileName: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'    
    });
    return this.http.get<Blob>(apiEndPoint.concat('/loading/' + fileName ),
       {headers: headers, responseType: 'blob' as 'json' });
  }
  findZipcodesById(data :any): Observable<any>{
    return this.http.get(apiEndPoint.concat('/master/zipcode/' + data))
  }

  findDistrictsById(data :any): Observable<any>{
    return this.http.get(apiEndPoint.concat('/master/district/' + data ))
  }

  findAmphuresById(data :any): Observable<any>{
    return this.http.get(apiEndPoint.concat('/master/amphure/' + data ))
  }

  findProvincesById(data :any): Observable<any>{
    return this.http.get(apiEndPoint.concat('/master/province/' + data ))
  }

}

