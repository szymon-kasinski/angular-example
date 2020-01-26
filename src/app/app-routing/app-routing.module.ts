import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceComponent } from '../advice/advice.component';
import { XkcdComponent } from '../xkcd/xkcd.component';

const routes: Routes = [
  { path: 'advice', component: AdviceComponent },
  { path: 'xkcd', component: XkcdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }