import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class StoresService {

  body: any

  constructor(private http:HttpClient) { }

  getStores(url:string) {
    return this.http.get(url)
  }

  createStore(url:string, body:any) {
    return this.http.post(url, body)
  }

  updateStore() {

  }

  deleteStore() {

  }
}
