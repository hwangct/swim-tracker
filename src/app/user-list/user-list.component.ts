import { Component } from '@angular/core';
import { User } from '../core/models/user';
import { UsersService } from '../core/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: User[] = [];
  edit: boolean = true;
  userForm: FormGroup;

  constructor(
    private us: UsersService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.userForm = new FormGroup({
      formArrayName: this.formBuilder.array([]),
    });
  }

  getEdit(data: boolean) {
    this.edit = data;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.us.getUsers().subscribe((data) => {
      if (!data) {
        console.error(`unable to get users`);
      } else {
        this.users = data;
        console.log(JSON.stringify(data));
      }
    });
  }

  addUserDialog() {
    const dialogRef = this.dialog.open(UserDialogComponent, { data: {} });

    dialogRef.afterClosed().subscribe((val) => {
      if (val === 'saved') {
        this.getUsers();
      }
    });
  }
}
