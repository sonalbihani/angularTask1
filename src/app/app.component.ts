import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTask1';
  dataList = [
    {
      name: "FREE",
      price: 0
    },
    {
      name: "PLUS",
      price: 9
    },
    {
      name: "PRO",
      price: 49
    }
  ]
}
