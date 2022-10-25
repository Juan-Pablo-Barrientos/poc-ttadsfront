import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  maps:any
  constructor(
    private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMaps().subscribe(
      (res:any) => {
        this.maps = res.data;
      }
    );
  }
}
