import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { NgChatModule } from 'ng-chat';
import { DemoAdaptorComponent } from './components/demo-adaptor/demo-adaptor.component';

// NEBULAR
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import {NbThemeModule,NbMenuModule, NbMenuItem,NbWindowModule,NbChatModule, NbSidebarService} from '@nebular/theme';
import { ChatComponent } from './components/contacts/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    MainComponent,
    ContactsComponent,
    MenuComponent,
    PostFeedComponent,
    DemoAdaptorComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgChatModule,

    //NEBULAR

    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbChatModule


  ],
  providers: [
    NbSidebarService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
