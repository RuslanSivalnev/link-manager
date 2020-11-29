import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../../../shared/interfaces';
import { LinkManageStateInterface } from '../interfaces';


export const linkFeatureSelector = createFeatureSelector<AppStateInterface, LinkManageStateInterface>('linkManage');

export const linksSelector = createSelector(
  linkFeatureSelector,
  (linkManageState) => linkManageState.links
);

