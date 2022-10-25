import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit  {

  quests:any
  constructor(
    private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getQuests().subscribe(
      (res:any) => {
        this.quests = res.data;
      }
    );
  }
}
