import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RuleRoutingModule } from './rule.routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { RuleService } from './rule.service';
import { LoadingButtonComponent } from '../components/loading-button/loading-button.component';

@NgModule({
  imports: [RuleRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ListComponent, AddComponent, EditComponent, DetailComponent, LoadingButtonComponent],
  providers: [RuleService]
})
export class RuleModule {}
