import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentsService } from '../../services/index';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;

  constructor(
    private ds: DocumentsService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      filename: ['', Validators.required],
      category: ['', Validators.required],
      description:[''],
      file: ''
    });
  }

  onSubmit() {
    console.log(this.uploadForm.value);
  }

}
