import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const endpoint = environment.apiEndPoint;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // create
  saveRegister(data: any): Observable<any> {
    return this.http.post<any>(endpoint + '/users/register', JSON.stringify(data), httpOptions)
  }
  findZipcodesById(data :any): Observable<any>{
    return this.http.get(endpoint.concat('/master/zipcode/' + data))
  }

  findDistrictsById(data :any): Observable<any>{
    return this.http.get(endpoint.concat('/master/district/' + data ))
  }

  findAmphuresById(data :any): Observable<any>{
    return this.http.get(endpoint.concat('/master/amphure/' + data ))
  }

  findProvincesById(data :any): Observable<any>{
    return this.http.get(endpoint.concat('/master/province/' + data ))
  }

}
