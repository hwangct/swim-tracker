import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimeDialogComponent } from '../time-dialog/time-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit, AfterViewInit {
  param: string | undefined;

  // GOLDEN LAYOUT
  private _controlsElement: HTMLElement;

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this._controlsElement = this._controlsComponent.element;
    //   this._goldenLayoutHostComponent.initialize();
    //   this._controlsComponent.initialize(this._goldenLayoutHostComponent);
    //   if (this._goldenLayoutHostComponent.isGoldenLayoutSubWindow) {
    //     this._controlsElement.style.display = 'none';
    //   }
    // }, 0);
  }
  // End GOLDEN LAYOUT

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.param = params['param'];
    });
  }

  addEventTime() {
    this.dialog
      .open(TimeDialogComponent, {
        data: {},
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'saved') {
          // this.getItems();
        }
      });
  }
}
