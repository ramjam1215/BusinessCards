import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-business-card',
  templateUrl: './new-business-card.component.html',
  styleUrls: ['./new-business-card.component.css']
})
export class NewBusinessCardComponent implements OnInit {

  constructor(private dbService: DataBaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {}

  onSubmit(){

    if(this.dbService.cardForm.invalid){
      this.dbService.clearForm();
      console.log("invalid form");
      //in here i could set a boolean to change the border-colors around the input
      return;
    }

    let data = this.dbService.cardForm.value;
    console.log(data);
    //this.dbService.checkCardForm(data);
    
    this.dbService.createBusinessCard(data)
      .then(res =>{
        this.dbService.clearForm();
        console.log("new business Card added");
        console.log(res);
       })
       
       .catch(err =>{
          this.dbService.clearForm();
          console.log('Somethings is wrong...');
          console.log(err);
       });

      
    //old code moved cardForm to database Service
    //this.dbService.checkCardForm(this.cardForm.value);

  }

}
