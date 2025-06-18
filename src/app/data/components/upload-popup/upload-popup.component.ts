import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from "@angular/material/legacy-dialog";
import { NgxFileDropEntry } from "ngx-file-drop";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-upload-popup',
    templateUrl: './upload-popup.component.html',
    styleUrls: ['./upload-popup.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UploadPopupComponent implements OnInit {
    @Input() allowedFileType: any;
    @Output() onUploadFile = new EventEmitter<any>();
    uploadFile: any;
    acceptType: any;
    noOfFiles: any;
    public files: NgxFileDropEntry[] = [];
    MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    constructor(
        public dialogRef: MatDialogRef<UploadPopupComponent>,
        private toastr: ToastrService,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
    ngOnInit(): void {
        console.info(this.data);
        this.acceptType = this.data?.acceptType ? this.data.acceptType.split(',') : ['jpeg', 'jpg', 'png'];

        // this.acceptType  = this.data?.acceptType.split(',')
        this.noOfFiles = this.data?.noOfFiles
    }

    handleFileInput(files: NgxFileDropEntry[]) {
        this.files = files;
        if (this.noOfFiles && this.files.length > this.noOfFiles) {
            this.toastr.error('Multiple files are not allowed');
            this.files = []
            return
        }
        for (const droppedFile of files) {
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    if (file.size > this.MAX_FILE_SIZE) {
                        this.toastr.error('File size exceeds the allowed limit.');
                        return;
                    }
                    fileEntry.file((file: File) => {
                        if (this.acceptType && this.acceptType.indexOf(file.name.split('.').pop()) <= -1) {
                            this.toastr.error('Uploaded files are not acceptable');
                            return
                        }
                        this.uploadFile = file;

                    });
                })
            } else {
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
            }
        }
    }

    public fileOver(event: any) {
        console.log(event);
        this.uploadFile = event;
    }

    public fileLeave(event: any) {
        console.log(event);
        this.uploadFile = event;
    }

    onSubmitClick() {
        if (this.uploadFile) {
        }
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }
}