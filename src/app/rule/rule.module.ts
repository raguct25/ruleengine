import { NgModule } from '@angular/core';

import { RuleComponent } from './rule.component';
import { RuleRoutingModule } from './rule.routing.module';

@NgModule({
  imports: [
    RuleRoutingModule,
  ],
  declarations: [ RuleComponent ]
})
export class DashboardModule { }
