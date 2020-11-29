import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) {
  }

  public showSuccess(message, action = null, duration = 3000): void {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        duration,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'notification-success'
      });
    });
  }

  public showFailure(message, action = null, duration = 3000): void {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        duration,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'notification-failure'
      });
    });
  }
}
