import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
 quantity: number
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})

export class AddDialogComponent implements OnInit {
  productForm = this.fb.group({
    quantity: ['', [ Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
