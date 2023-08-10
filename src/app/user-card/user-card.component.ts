import { Component, Input } from "@angular/core";
import { UsersService } from "../core/services/users.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../core/models/user";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent {
  constructor(private us: UsersService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}
  @Input() user!: User;
}
