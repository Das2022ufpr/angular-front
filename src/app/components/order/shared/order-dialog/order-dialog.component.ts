import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidacaoCPF } from 'src/app/shared/cpf-validator';

export interface DialogData {
  cpf: string;
}

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {
  cpf: string = "";
  orderForm = this.fb.group({
    cpf: ['', [ Validators.required, Validators.minLength(11), ValidacaoCPF.execute ]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
