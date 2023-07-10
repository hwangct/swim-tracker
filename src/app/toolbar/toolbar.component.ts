import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  title = 'swim-tracker';
  edit: boolean = false;
  @Output() editChange = new EventEmitter<boolean>();
  disabled = false;

  constructor() {}
  toggleEdit() {
    this.editChange.emit(!this.edit);
  }
}
