import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }

}
