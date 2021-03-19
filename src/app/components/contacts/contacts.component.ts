import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
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
      alert(link.name);
    }
}
