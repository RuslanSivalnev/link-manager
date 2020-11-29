import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { LinkInterface } from '../interfaces';

export const loadLinksAction = createAction(
  ActionTypes.LOAD_LINKS
);

export const loadLinksSuccessAction = createAction(
  ActionTypes.LOAD_LINKS_SUCCESS,
  props<{ links: LinkInterface[] }>()
);

export const addLinkAction = createAction(
  ActionTypes.ADD_LINK,
  props<{ linkData: LinkInterface }>()
);

export const editLinkAction = createAction(
  ActionTypes.EDIT_LINK,
  props<{ linkData: LinkInterface }>()
);

export const deleteLinkAction = createAction(
  ActionTypes.DELETE_LINK,
  props<{ id: string }>()
);
