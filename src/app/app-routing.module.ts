import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

const routes: Routes = [
    {
        path: 'contratacao-parcelada',
        component: AComponent
    },
    {
        path: 'contratacao-parcelada/resumo',
        component: BComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
