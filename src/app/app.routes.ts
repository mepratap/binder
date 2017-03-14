import { Routes } from '@angular/router';

import { UploadComponent } from './upload-files/app.upload.component';
import { DocumentsComponent } from './documents/app.documents.component';
import { LoginComponent } from './login/app.login.component';
import { RegisterComponent } from './register/app.register.component';

export const APP_ROUTES:Routes = [
    {path: 'upload', component: UploadComponent },
    {path: 'documents', component: DocumentsComponent},
    {path: 'login', component: LoginComponent },
    {path: 'login/register', component: RegisterComponent }
] 