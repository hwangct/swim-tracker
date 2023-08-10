import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../core/models/user";
import { UsersService } from "../core/services/users.service";

export interface UserDialogData {
  editData: User;
}

@Component({
  selector: "app-user-dialog",
  templateUrl: "./user-dialog.component.html",
  styleUrls: ["./user-dialog.component.scss"],
})
export class UserDialogComponent {
  userForm!: FormGroup;
  action: string = "Add";

  constructor(
    private dialogRef: MatDialogRef<UserDialogComponent>,
    private us: UsersService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      team: ["", Validators.required],
    });

    if (this.data.editData) {
      this.userForm.controls["id"].setValue(this.data.editData.id);
      this.userForm.controls["name"].setValue(this.data.editData.name);
      this.userForm.controls["team"].setValue(this.data.editData.team);
      this.action = "Edit";
    }
  }

  saveUser() {}
}
