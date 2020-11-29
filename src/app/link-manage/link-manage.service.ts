import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LinkInterface } from './interfaces';
import { LocalStorageService, NotificationService } from '../../../shared/root-services';

@Injectable()

export class LinkManageService {
  private storageKey = 'links';

  constructor(
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
    private translateService: TranslateService
  ) {
  }

  private getLinkFromStorage(): LinkInterface[] {
    return this.localStorageService.get(this.storageKey) || [];
  }

  public loadLinks(): LinkInterface[] | [] {
    return this.localStorageService.get(this.storageKey) || [];
  }

  public addLink(linkData): void {
    const linkArray = this.getLinkFromStorage();
    const newLinkArray = [...linkArray, linkData];
    this.localStorageService.set(this.storageKey, newLinkArray);
  }

  public editLink(linkData): void {
    const linkArray = this.getLinkFromStorage();
    const newLinkArray = linkArray.map(link => link.id === linkData.id ? linkData : link);
    this.localStorageService.set(this.storageKey, newLinkArray);
  }

  public deleteLink(id: string): void {
    const newLinkArray = this.getLinkFromStorage().filter(link => link['id'] !== id);
    this.localStorageService.set(this.storageKey, newLinkArray);
  }

  // notifications
  public showAddNotificationSuccess(): void {
    const message = this.translateService
      .instant('pages.link_manage.add_link_success_notification');
    this.notificationService.showSuccess(message);
  }

  public showDeleteNotificationSuccess(): void {
    const message = this.translateService
      .instant('pages.link_manage.delete_link_success_notification');
    this.notificationService.showSuccess(message);
  }

  public showEditNotificationSuccess(): void {
    const message = this.translateService
      .instant('pages.link_manage.edit_link_success_notification');
    this.notificationService.showSuccess(message);
  }

}
