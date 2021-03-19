import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items: NbMenuItem[] = [
      {
        title: 'Profile',
        expanded: true,
        children: [
          {
            title: 'Change Password',
          },
          {
            title: 'Privacy Policy',
          },
          {
            title: 'Logout',
          },
        ],
      },
      {
        title: 'Shopping Bag',
        children: [
          {
            title: 'First Product',
          },
          {
            title: 'Second Product',
          },
          {
            title: 'Third Product',
          },
        ],
      },
      {
        title: 'Orders',
        children: [
          {
            title: 'First Order',
          },
          {
            title: 'Second Order',
          },
          {
            title: 'Third Order',
          },
        ],
      },
    ];

  //public adapter: ChatAdapter = new DemoAdapterPagedHistory();

  public messageSeen(event: any)
  {
    console.log(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
