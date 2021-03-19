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
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/contacts/chat/chat.component';
import {AuthGuard} from './auth-guard.service';
// NEBULAR
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import {NbThemeModule,NbMenuModule, NbMenuItem,NbWindowModule,NbChatModule, NbSidebarService} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbPasswordAuthStrategy,NbAuthSimpleToken,NbAuthJWTToken,NbDummyAuthStrategy, NbAuthModule } from '@nebular/auth';

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
    HttpClientModule,

    //NEBULAR

    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbChatModule,
    NbAuthModule.forRoot({
     strategies: [
       // NbPasswordAuthStrategy.setup({
       //   name: 'email',
       // }),
       NbDummyAuthStrategy.setup({
         name: 'email',
         alwaysFail: false,
        token: {
          class: NbAuthSimpleToken,

          key: 'auth_app_token'
          // this parameter tells where to look for the token

        },




      }),

     ],
     forms: {},
   }),
    NbThemeModule.forRoot(),
    NbEvaIconsModule,



  ],
  providers: [
    NbSidebarService,
     AuthGuard,



  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
