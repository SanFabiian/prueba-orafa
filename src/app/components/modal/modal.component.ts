import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoresService } from '../../services/stores.service';

declare let window:any

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  formModal: any
  form: FormGroup

  constructor(private storesServices: StoresService, private formBuilder:FormBuilder) {}

  ngOnInit(): void{
    this.formModal = new window.bootstrap.Modal(document.getElementById('modalCreateStore'))
    this.form = this.formBuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      openingHours: ['',Validators.required]
    })
  }


  openModal() {
    this.formModal.show()
  }
  closeModal() {
    this.formModal.hide()
  }

  sendData() {
    this.storesServices.createStore('http://localhost:3000/stores', {
      id: this.form.value.id,
      name: this.form.value.name,
      address: this.form.value.address,
      city: this.form.value.city,
      openingHours: this.form.value.openingHours
    })
    .subscribe(res => {
      console.log('send...?')
    })
  }
}
