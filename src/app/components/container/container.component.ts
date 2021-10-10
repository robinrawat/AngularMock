import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, ResolveData, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Mockups, ResultEntity, results } from 'src/app/models/mockup';
import { MockupsService } from 'src/app/services/mockups.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() ele1!: Mockups;

  @Input() resData!: ResultEntity;

  @Output() onDisplay: EventEmitter<results> = new EventEmitter();

  oldData!: results;

  proper1:any;

  itemInCart = 0;
  notEmptyPost = true;
  notscrolly = true;
  reData!: results; 
  subs: Subscription[] = [];

  constructor(private router: Router,
    private spinner: NgxSpinnerService, 
    private mockups: MockupsService) { }

  ngOnInit(): void {
  }

  onClick(m: results) {
    this.onDisplay.emit(m);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          //@ts-ignore: Object is possibly 'null'
          "imageUrl": m.bannerImage.url,
          //@ts-ignore: Object is possibly 'null'
          "subCategory": m.subCategory.name,
          //@ts-ignore: Object is possibly 'null'
          "category": m.category.name,
          "description": m.description
      }
    };
    this.router.navigate(['/display'], navigationExtras );
  }

  onAssign(e: Mockups ){
    this.ele1 = e;

    //@ts-ignore: Object is possibly 'null'
    this.resData = this.ele1.data;
    //@ts-ignore: Object is possibly 'null'
    this.oldData = this.resData.items;
  }

  public onAdd():void{
      this.itemInCart++;
      // console.log(this.itemInCart);
      this.mockups.shareData(this.itemInCart);
  }
}


