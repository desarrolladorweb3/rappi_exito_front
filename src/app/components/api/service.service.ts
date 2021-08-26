import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FileToUpload } from 'app/file-upload/file-to-upload';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlClient = 'http://192.168.0.172:7390/Api/';
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  headers_media = new HttpHeaders({'Content-Type': 'multipart/form-data; boundary=something'});
  constructor(private http: HttpClient) { }

  uploadFile(theFile: File) : Observable<Response[]> {
    const formData: FormData = new FormData();
    formData.append('fileKey', theFile, theFile.name);
    return this.http.post<Response[]>(this.urlClient + 'MarketPlace/generateInvoice', formData);
  }

}
