import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiBaseUrl}/send-email`; 

  constructor(private http: HttpClient) {}

  sendEmail(data: {
    name: string;
    email: string;
    message: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
