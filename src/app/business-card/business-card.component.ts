import { Component, Input } from '@angular/core';
import { BusinessCard } from '../user/user';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {

  @Input() bCard: BusinessCard;
  @Input() i: number;

  bEdit = false;
  constructor(private dataBaseService: DataBaseService) { }

  editMode(){ this.bEdit = !this.bEdit;}

  showForm(){return this.bEdit;}

  //we call finishEdit after we update our service form
  //finished editting now update database
  finishEdit(){
    this.dataBaseService.updateBusinessCard(this.bCard.id)
      .then(res =>{
        this.dataBaseService.clearForm();
        console.log("Editted Card pushed to database");
        console.log(res);
      })
    
      .catch(err =>{
        this.dataBaseService.clearForm();
        console.log("Something went wrong");
        console.log(err);
      });

    this.editMode();
  }

  deleteCard(){
    this.dataBaseService.deleteBusinessCard(this.bCard.id)
      .then(res =>{
        console.log("Card deleted");
        console.log(res);
      })
      
      .catch(err =>{
        console.log("Something went wrong");
        console.log(err);
      });
  }
}
