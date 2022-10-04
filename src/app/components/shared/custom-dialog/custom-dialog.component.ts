import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ValidacaoCPF } from 'src/app/shared/cpf-validator';

export interface DialogData {
  name: string;
  cpf: string;
  lastName: string;
}

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {
  clientForm = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6) ]],
    lastName: ['', [ Validators.required, Validators.minLength(6) ]],
    cpf: ['', [ Validators.required, Validators.minLength(11), ValidacaoCPF.execute ]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
