import { Component, OnInit, AfterViewInit, ElementRef, HostListener, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { LookupPopupComponent } from "src/app/data/components/lookup-popup/lookup-popup.component";
import { TestMock } from "src/app/data/mocks/test-mock/test-mock";
import { TestItemModel } from "src/app/data/model/test-model/test-item.model";
import { TestMainModel } from "src/app/data/model/test-model/test-main.model";
import { CommonService } from "src/app/Services/common-service/common.service";
import { LoginService } from "src/app/Services/login-service/login.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    mail: string = 'info@example.com';
    showScrollButton = false;
    @ViewChild('section') section!: ElementRef;
    @ViewChild('section1') section1!: ElementRef;

    dataSource: MatTableDataSource<TestItemModel> | undefined;
    tableData: TestMainModel = new TestMock();
    detail: TestItemModel[] = [];

    constructor(
        public loginService: LoginService,
        private dialog: MatDialog,
        private common: CommonService,
    ) { }

    ngOnInit(): void {
        // this.getdata();
    }

    getdata() {
        this.common.getPotos().subscribe({
            next: (res: any) => {
                this.detail = [];
                const d = res;
                if (d) {
                    d.map((item: any) => {
                        this.detail.push({
                            ...item,
                        })
                    })
                    // console.log('this.dataSource', this.dataSource)
                }
                this.detail.forEach((item: any, index: number) => {
                    item['sNo'] = index + 1;
                });
                this.dataSource = new MatTableDataSource<TestItemModel>(this.detail);
            }
        })

    }

    getPopup() {
        this.common.getPotos().subscribe({
            next: (res: any) => {
                this.detail = [];
                const d = res;
                if (d) {
                    d.map((item: any) => {
                        this.detail.push({
                            ...item,
                        })
                    })
                    // console.log('this.dataSource', this.dataSource)
                }
                this.detail.forEach((item: any, index: number) => {
                    item['sNo'] = index + 1;
                });
                this.dataSource = new MatTableDataSource<TestItemModel>(this.detail);
                const dialogRef = this.dialog.open(LookupPopupComponent, {
                    width: '80%',
                    height: '80%',
                    data: {
                        title: 'Album Details',
                        dataSource: this.dataSource?.data || [],
                        columns: this.tableData.column,
                        displayedColumns: this.tableData.columnsKeys
                    },
                });
                dialogRef.afterClosed().subscribe((res: any) => {
                })
            }
        })

        // this.common.getPotos().subscribe({
        //     next: (res: any) =>

        //         console.log('data', res)
        // })
    }



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

    @HostListener('document:scroll', [])
    onWindowScroll() {
        this.showScrollButton = window.scrollY > 300;
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}