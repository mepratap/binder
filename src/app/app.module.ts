import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { UploadComponent } from './upload-files/app.upload.component';
import { DocumentsComponent } from './documents/app.documents.component';
import { LoginComponent } from './login/app.login.component';
import { RegisterComponent } from './register/app.register.component';

import { HeaderComponent } from './shared/app-header/app.header.component';
import { FooterComponent } from './shared/app-footer/app.footer.component';

import { APP_ROUTES } from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(APP_ROUTES) ],
    declarations: [
        AppComponent, 
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        UploadComponent,
        DocumentsComponent
        ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}