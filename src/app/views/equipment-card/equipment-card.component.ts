import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.scss']
})
export class EquipmentCardComponent implements OnInit {
  @Input() equipment : any;
  equipmentKeys:any

  constructor() { }

  ngOnInit(): void {
    this.equipmentKeys=Object.keys(this.equipment)
  }

}
