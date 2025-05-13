import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { UploadPopupComponent } from "src/app/data/components/upload-popup/upload-popup.component";
import { CommonService } from "src/app/Services/common-service/common.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
    todayDate: Date = new Date();
    maxDate: any = null;
    // mindate: Date = new Date();
    // maxdate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
    form: FormControl | any;
    mail: string = 'info@example.com';
    selectedDateTime = {
        date: '',
        time: '',
        period: ''
    };

    constructor(
        private dialog: MatDialog,
        private commonService: CommonService,
    ) { }

    ngOnInit(): void {
        // this.get();
        this.form = new FormGroup({
            date: new FormControl({ value: '', disabled: false }),
        })
    }

    photos: any;

    get() {
        this.commonService.getPotos().subscribe({
            next: (res: any) => {
                this.photos = res.carts;

            }
        })
    }


    @ViewChild('section') section!: ElementRef;
    @ViewChild('section1') section1!: ElementRef;

    ngAfterViewInit(): void {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target as HTMLElement;
                const left = element.querySelector('.animate-left');
                const right = element.querySelector('.animate-right');
                if (entry.isIntersecting) {
                    left?.classList.add('show');
                    right?.classList.add('show');
                } else {
                    left?.classList.remove('show');
                    right?.classList.remove('show');
                }
            });
        }, { threshold: 0.1 });
        observer.observe(this.section.nativeElement);

        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const element = entry.target as HTMLElement;
                const left = element.querySelector('.animate-left');
                const right = element.querySelector('.animate-right');
                if (entry.isIntersecting) {
                    left?.classList.add('show');
                    right?.classList.add('show');
                } else {
                    left?.classList.remove('show');
                    right?.classList.remove('show');
                }
            });
        }, { threshold: 0.1 });
        observer1.observe(this.section1.nativeElement);
    }


    showScrollButton = false;

    @HostListener('document:scroll', [])
    onWindowScroll() {
        this.showScrollButton = window.scrollY > 300;
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }



    onDateTimePicked(data: { date: string, time: string, period: string }) {
        this.selectedDateTime = data;
        // console.log('Date/Time picked:', data);
    }

    date() {
        alert(JSON.stringify(this.selectedDateTime))
    }

    onDateChange(value: any) {
        const dateObj: Date = new Date(value);
        const formattedDate: string = this.formatDateToDDMMYYYY(dateObj);
        alert(formattedDate)
        // return formattedDate
    }
    formatDateToDDMMYYYY(date: Date): string {
        const day: string = String(date.getDate()).padStart(2, '0');
        const month: string = String(date.getMonth() + 1).padStart(2, '0');
        const year: string = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    }

    popup() {
        const dialogRef = this.dialog.open(UploadPopupComponent, {
            width: '50%',
            height: '70%',
            // width: '90vw',
            // maxWidth: '95vw',
            // height: 'auto',
            // maxHeight: '90vh',
            // panelClass: 'modalWrapper',
            data: {
                heading: 'Web Notification'
            }
        });
        dialogRef.afterClosed().subscribe((res: any) => {

        });
    }





}