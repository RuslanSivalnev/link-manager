import { LinkManageStateInterface } from '../interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { addLinkAction, deleteLinkAction, editLinkAction, loadLinksSuccessAction } from './link-manage.actions';


export const initialState: LinkManageStateInterface = {
  links: null
};


const linkReducer = createReducer(
  initialState,

  on(loadLinksSuccessAction, (state, action) => ({
      ...state,
      links: action.links
    })
  ),

  on(addLinkAction, (state, action) => ({
      ...state,
      links: [...state.links, action.linkData]
    })
  ),

  on(editLinkAction, (state, action) => ({
      ...state,
      links: state.links.map(link => link.id === action.linkData.id ? action.linkData : link)
    })
  ),

  on(deleteLinkAction, (state, action) => ({
      ...state,
      links: state.links.filter(link => link.id !== action.id)
    })
  ),
);

export function reducer(state: LinkManageStateInterface, action: Action): LinkManageStateInterface {
  return linkReducer(state, action);
}


