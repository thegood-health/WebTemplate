import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';

import { NbWindowService } from '@nebular/theme';
import {ChatComponent} from './chat/chat.component';
export interface ContactInt {
  name: string;
  updated: Date;
  id: string;
}


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  contactsList: ContactInt[] = [
  {
    name: 'Contact ',
    updated: new Date(),
    id: "12345"
  },
  {
    name: 'Kitchen Remodel',
    updated: new Date(),
    id: "23456"

  }
];

constructor(private windowService: NbWindowService) {}

  ngOnInit(): void {
  }

  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate!:TemplateRef<any>;


    openWindowWithBackdrop() {
      this.windowService.open(
        ChatComponent,
        { title: 'Window with backdrop', hasBackdrop: true },
      );
    }

    openWindowWithoutBackdrop() {
      this.windowService.open(
        ChatComponent,
        { title: 'Window without backdrop', hasBackdrop: false, closeOnEsc: false },
      );
    }

    onAdd(e: Event) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }

    onRemove(e: Event) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }

    save(link:ContactInt) {
      this.openWindowWithoutBackdrop();
    }
}
