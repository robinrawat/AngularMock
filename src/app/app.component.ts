import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mockups, ResultEntity } from './models/mockup';
import { MockupsService } from './services/mockups.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  subs: Subscription[] = [];
  refData!: Mockups;

  // resData!: ResultEntity;

  @Output() firstSet: EventEmitter<ResultEntity> = new EventEmitter();


  constructor(private mockups: MockupsService){}

  
  ngOnInit(): void{
    this.subs.push(this.mockups.getData().subscribe(data => {
      this.refData = data;
      //@ts-ignore: Object is possibly 'null'
      // console.log(this.refData.data.items[0].subCategory.name);
      this.firstSet.emit(this.refData);
    }));

    //@ts-ignore: Object is possibly 'null'
    

  }

}
