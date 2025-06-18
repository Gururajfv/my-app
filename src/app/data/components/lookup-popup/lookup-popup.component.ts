import { Component, Inject, Input, OnInit } from "@angular/core";
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from "@angular/material/legacy-dialog";
import { MatLegacyTableDataSource as MatTableDataSource } from "@angular/material/legacy-table";

@Component({
    selector: 'app-lookup-popup',
    templateUrl: './lookup-popup.component.html',
    styleUrls: ['./lookup-popup.component.scss']
})

export class LookupPopupComponent implements OnInit {

    selectedRow: any;
    title: string = '';
    @Input() stickyHeader: boolean = true;
    dataSource: MatTableDataSource<any> | any;
    columns: any[];
    displayedColumns: string[];

    constructor(
        public dialogRef: MatDialogRef<LookupPopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.title = data.title;
        this.dataSource = new MatTableDataSource(data.dataSource); // Assign table data
        this.columns = data.columns; // Assign column definitions
        this.displayedColumns = data.displayedColumns;
    }

    ngOnInit(): void {

    }

    rowClick(rowData: any) {
        this.selectedRow = rowData;
        console.log('Selected Row:', JSON.stringify(this.selectedRow));
        this.dialogRef.close(this.selectedRow);
    }

    closeDialog() {
        this.dialogRef.close();
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;

        if (this.dataSource) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
    }

    onCloseClick() {
        this.dialogRef.close();
    }






}