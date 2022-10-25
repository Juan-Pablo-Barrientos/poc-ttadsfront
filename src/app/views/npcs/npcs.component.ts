import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styleUrls: ['./npcs.component.scss']
})
export class NpcsComponent implements OnInit {
  npcs:any
  constructor(
    private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNpc().subscribe(
      (res:any) => {
        this.npcs = res.data;
      }
    );
  }

}
