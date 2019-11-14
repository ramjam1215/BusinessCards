import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEventsArray } from '@angular/fire/firestore';

@Component({
  selector: 'new-business-card',
  templateUrl: './new-business-card.component.html',
  styleUrls: ['./new-business-card.component.css']
})
export class NewBusinessCardComponent implements OnInit {

  bValid = false;
  constructor(private dataBaseService: DataBaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {}

  onSubmit(){
    this.bValid = this.dataBaseService.sendForm();
  }

}
