import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    constructor(
        private http: HttpClient,
    ) { }

    getPotos(): Observable<any> {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        const url1 = 'https://dummyjson.com/carts';
        return this.http.get(url);
    }
}