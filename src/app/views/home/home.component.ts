import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sqlEquipments:any[]=[];
  sqlGetAllTime:any;
  sqlInsertTime:any;
  mongooseGetAllTime:any;
  mongooseInsertTime:any;
  mongoEquipments:any[]=[];
  sqlGets:any=0;
  mooongoseGets:any=0;
  sqlGetsTotal:any=0;
  moongooseGetsTotal:any=0;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  sqlGetAllEquipment(){
    this.dataService.getSqlEquipment().subscribe((res:any) => {
      this.sqlGetAllTime=res.time
      this.sqlGetsTotal+=res.time;
      this.sqlGets+=1
      this.sqlEquipments=res.data
    });
  }
  mongooseGetAllEquipment(){
    this.dataService.getMongoEquipment().subscribe((res:any) => {
      this.mongooseGetAllTime=res.time
      this.moongooseGetsTotal+=res.time;
      this.mooongoseGets+=1
      this.mongoEquipments=res.body
    });
  }
  mongooseInsertEquipment(){
    this.dataService.insertMongoEquipment().subscribe((res:any) => {
      this.mongooseInsertTime=res.time
      this.moongooseGetsTotal=0
      this.mooongoseGets=0
    });
  }
  sqlInsertEquipment(){
    this.dataService.insertSqlEquipment().subscribe((res:any) => {
      this.sqlInsertTime=res.time
      this.sqlGetsTotal=0;
      this.sqlGets=0
    });
  }
}
