import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  //bValid = false;
  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit() {
  }

  /*
  onSubmit(from: number){
    
    //new Card
    if(from == 1){
      this.bValid = this.dataBaseService.sendForm(from);
    }

    //Editted Card
    else{
      this.bValid = this.dataBaseService.sendForm(from);
    }
    
  }

  */
}
