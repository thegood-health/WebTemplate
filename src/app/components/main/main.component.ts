import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbAuthSimpleToken, NbAuthJWTToken,NbAuthToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user = {};

  constructor(private authService: NbAuthService) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthToken) => {
        alert(token.getValue())
        if (token.isValid()) {
          token.getValue()
          this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
          alert(this.user)
        }

      });
  }
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

  ngOnInit(): void {
  }

}
