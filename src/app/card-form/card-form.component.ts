import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit() {
  }

}
