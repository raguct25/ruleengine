import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rule',
    },
    children: [
      {
        path: '',
        component: ListComponent,
        data: {
          title: 'List',
        },
      },
      {
        path: 'new',
        component: AddComponent,
        data: {
          title: 'Add',
        },
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        data: {
          title: 'Edit',
        },
      },
      {
        path: ':id',
        component: DetailComponent,
        data: {
          title: 'Detail',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class RuleRoutingModule {}

