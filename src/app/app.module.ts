import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import {
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent
} from './components/index';

import {
    UserService,
    ValidateService,
    AuthGuardService,
    DocumentsService
} from './services/index';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HomeComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
        HeaderComponent,
        FooterComponent,
        UploadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [UserService, ValidateService, AuthGuardService, DocumentsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
