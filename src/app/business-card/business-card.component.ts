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

  constructor(private databaseService: DataBaseService) { }



}
