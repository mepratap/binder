import { Routes } from '@angular/router';

import { UploadComponent } from './upload-files/app.upload.component';
import { DocumentsComponent } from './documents/app.documents.component';

export const APP_ROUTES:Routes = [
    {path: 'upload', component: UploadComponent },
    {path: 'documents', component: DocumentsComponent}
] 