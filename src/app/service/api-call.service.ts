import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }

  getLiveMatchScore(){
  return this._httpClient.get(`${environment.apiUrl}Cricket/live`)
  }

  getLatestNews(){
    return this._httpClient.get(`${environment.apiUrl}Cricket/latestNews`)
  }
}
