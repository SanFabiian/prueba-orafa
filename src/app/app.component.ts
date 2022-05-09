import { Component } from '@angular/core';
import { StoresService } from './services/stores.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'crud-orafa';

  storesList: Array<any> = []

  constructor(private storesServices: StoresService) {
    this.storesServices.getStores('http://localhost:3000/stores')
      .subscribe((res:any) => {
        this.storesList = res
      })
  }
}
