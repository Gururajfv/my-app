import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    key: string = 'gUrUrAj';

    constructor() { }

    getLocalStorage(key: string) {
        let value = localStorage.getItem(key) as string;
        if (value != null) {
            return this.decrypt(value);
        } else {
            return null;
        }
    }

    setLocalStorage(key: string, value: string) {
        localStorage.setItem(key, this.encrypt(value));
    }

    setJson(key: string, value: any) {
        localStorage.setItem(key, this.encrypt(JSON.stringify(value)));
    }

    removeItem(key: string) {
        localStorage.removeItem(key);
    }

    clearStorage() {
        localStorage.clear();
    }

    private encrypt(txt: string): string {
        return CryptoJS.AES.encrypt(txt, this.key).toString();
    }

    private decrypt(txtToDecrypt: string) {
        return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
    }

}