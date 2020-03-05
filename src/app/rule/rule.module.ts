import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { RuleRoutingModule } from './rule.routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  imports: [RuleRoutingModule, CommonModule],
  declarations: [ListComponent, AddComponent, EditComponent, DetailComponent],
  providers: []
})

export class RuleModule {}
