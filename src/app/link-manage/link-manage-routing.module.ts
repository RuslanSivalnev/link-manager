import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkManageComponent } from './feature/link-manage.component';

const routes: Routes = [
  {
    path: '', component: LinkManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkManageRoutingModule {
}
