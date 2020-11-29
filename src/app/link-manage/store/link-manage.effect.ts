import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { ActionTypes } from './action-types';
import { LinkManageService } from '../link-manage.service';
import { loadLinksSuccessAction } from './link-manage.actions';


@Injectable()
export class LinkManageEffect {
  constructor(
    private actions$: Actions,
    private linkManageService: LinkManageService
  ) {
  }

  // load links
  loadLinks$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.LOAD_LINKS),
    map(() => {
      const links = this.linkManageService.loadLinks();
      return loadLinksSuccessAction({ links });
    })
  ));

  loadLinksSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.LOAD_LINKS_SUCCESS),
    map((links) => links)
  ), { dispatch: false });


  // add new link
  addLink$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.ADD_LINK),
    map(({ linkData }) => {
      this.linkManageService.addLink(linkData);
      this.linkManageService.showAddNotificationSuccess();
      return { linkData };
    })
  ), { dispatch: false });

  // edit new link
  editLink$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.EDIT_LINK),
    map(({ linkData }) => {
      this.linkManageService.editLink(linkData);
      this.linkManageService.showEditNotificationSuccess();
      return { linkData };
    })
  ), { dispatch: false });

  // delete new link
  deleteLink$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.DELETE_LINK),
    map(({ id }) => {
      const newArrayLink = this.linkManageService.deleteLink(id);
      this.linkManageService.showDeleteNotificationSuccess();
      return { id };
    })
  ), { dispatch: false });

}

