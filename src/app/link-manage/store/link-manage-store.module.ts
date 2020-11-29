import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './link-manage.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LinkManageEffect } from './link-manage.effect';
import { LinkManageFacade } from './link-manage.facade';
import { LinkManageService } from '../link-manage.service';


@NgModule({
  imports: [
    StoreModule.forFeature('linkManage', reducer),
    EffectsModule.forFeature([LinkManageEffect])
  ],
  exports: [
    StoreModule,
    EffectsModule
  ],
  providers: [
    LinkManageFacade,
    LinkManageService
  ]
})

export class LinkManageStoreModule {
}
