import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface TimeDialogData {
  type: 'freestyle' | 'backstroke' | 'breaststroke' | 'butterfly';
}

@Component({
  selector: 'app-time-dialog',
  templateUrl: './time-dialog.component.html',
  styleUrls: ['./time-dialog.component.scss'],
})
export class TimeDialogComponent implements OnInit {
  // timeForm!: FormGroup;
  @Input() type!: string;
  action: string = 'Add';

  //Formly
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];
  //

  // constructor(
  //   private dialogRef: MatDialogRef<TimeDialogComponent>,
  //   private formBuilder: FormBuilder,
  //   @Inject(MAT_DIALOG_DATA) public data: TimeDialogData
  // ) {}

  ngOnInit(): void {
    // this.timeForm = this.formBuilder.group({
    //   desc: ["", Validators.required],
    //   points: [null, [Validators.required, Validators.min(1)]],
    //   users: [[], Validators.required],
    // });
  }

  saveItem() {
    // if (this.data.editData) {
    //   this.rs.editItem(this.data.editData.id, this.itemForm.value, this.data.type).subscribe({
    //     next: (res) => {
    //       this.dialogRef.close("saved");
    //       this._snackBar.open(`Edited item!`, "Dismiss", {
    //         duration: 3000,
    //       });
    //     },
    //     error: (res) => {
    //       this._snackBar.open(`Server Error occurred!`, "Dismiss", {
    //         duration: 3000,
    //       });
    //       console.error(`Server Error: ${res.error}`);
    //     },
    //   });
    // } else {
    // this.rs.addItems(this.itemForm.value, this.data.type).subscribe({
    // next: (res) => {
    // this.dialogRef.close("saved");
    // this._snackBar.open(`Added item!`, "Dismiss", {
    //   duration: 3000,
    // });
    //   },
    //   error: (res) => {
    //     this._snackBar.open(`Server Error occurred!`, "Dismiss", {
    //       duration: 3000,
    //     });
    //     console.error(`Server Error: ${res.error}`);
    //   },
    // });
  }
  // }
}
