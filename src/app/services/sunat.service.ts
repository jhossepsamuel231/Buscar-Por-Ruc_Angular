import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunatService {

  constructor(private http: HttpClient) { }

  buscarRuc(_ruc: string): Observable<any> {
    let data = {
      ruc: _ruc
    };

    let url = "https://www.softwarelion.xyz/api/sunat/consulta-ruc";
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNDMyLCJjb3JyZW8iOiJqaG9zc2Vwc2FtdWVsMjNAZ21haWwuY29tIiwiaWF0IjoxNjcyNjI1MDE4fQ.zsXj0R4AAGlJszMWvdRPdC4YTVDrj3BNdH115B-Meys";
    let _headers = new HttpHeaders().set("Authorization", token);

    return this.http.post(url, data, { headers: _headers });
  }

}
