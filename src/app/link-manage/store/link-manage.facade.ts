import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { LinkInterface } from '../interfaces';
import { Observable } from 'rxjs';
import { linksSelector } from './link-manage.selector';
import { addLinkAction, deleteLinkAction, editLinkAction, loadLinksAction } from './link-manage.actions';

@Injectable()
export class LinkManageFacade {
  constructor(
    private store: Store
  ) {
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  public get links$(): Observable<LinkInterface[]> {
    return this.store.pipe(select(linksSelector));
  }

  public loadLinks(): void {
    this.dispatch(loadLinksAction());
  }

  public addLink(linkData: LinkInterface): void {
    this.dispatch(addLinkAction({ linkData }));
  }

  public editLink(linkData: LinkInterface): void {
    this.dispatch(editLinkAction({ linkData }));
  }

  public deleteLink(id: string): void {
    this.dispatch(deleteLinkAction({ id }));
  }

}
