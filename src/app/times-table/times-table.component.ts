import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { TimesService } from '../core/services/times.service';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Time } from '../core/models/time';

@Component({
  selector: 'app-times-table',
  templateUrl: './times-table.component.html',
  styleUrls: ['./times-table.component.scss'],
})
export class TimesTableComponent {
  constructor(
    // @Inject(BaseComponentDirective.GoldenLayoutContainerInjectionToken)
    // private container: ComponentContainer,
    // elRef: ElementRef,
    private ts: TimesService
  ) {
    // super(elRef.nativeElement);
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'id', headerName: 'Name' },
    { field: 'event', headerName: 'Event' },
    { field: 'date', headerName: 'Date' },
    { field: 'age', headerName: 'Age' },
    { field: 'time', headerName: 'Time' },
    { field: 'competition', headerName: 'Competition' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<Time[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.ts.getTimes();
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}

export namespace TimesTableComponent {
  export const componentTypeName = 'TimesTable';
}
