import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MockupsService } from 'src/app/services/mockups.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = "logo";
  name = "AngularMock";
  cart = "cart";

  count!: number;

  subscription!: Subscription;


  constructor(private mockups: MockupsService) { }

  ngOnInit(): void {
    this.mockups.getCount().subscribe(c => this.count = c)
  }

  
}
