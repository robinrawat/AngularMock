import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultEntity, results } from 'src/app/models/mockup';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() contentref!: results;

  e!: results;

  imageUrl!: string;
  subCategory!: string;
  category!: string;
  description!: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.imageUrl = params["imageUrl"],
      this.subCategory = params["subCategory"],
      this.category = params["category"],
      this.description = params["description"]
    })
  };

  ngOnInit(): void {
    // console.log(this.contentref);
  }

  // displayContent(contentref: results){
  //   console.log("------");
  //   //@ts-ignore: Object is possibly 'null'
  //   this.e = contentref;
  // }

}
