import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { LinkInputComponent } from './ui/link-input/link-input.component';
import { LinkManageRoutingModule } from './link-manage-routing.module';
import { LinkManageComponent } from './feature/link-manage.component';
import { LinkTableComponent } from './ui/link-table/link-table.component';
import { LinkManageStoreModule } from './store/link-manage-store.module';

@NgModule({
  declarations: [
    LinkManageComponent,
    LinkTableComponent,
    LinkInputComponent],
  imports: [
    CommonModule,
    LinkManageRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    TranslateModule,
    LinkManageStoreModule
  ]
})
export class LinkManageModule {
}
