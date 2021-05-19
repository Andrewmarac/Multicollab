import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { CategoryComponent } from './category/category.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';
const routes: Routes = [
    { path:'about',component:AboutComponent},
    { path:'influencer',component:InfluencerComponent},
    { path:'category',component:CategoryComponent},
    { path:'assistenza',component:AssistenzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
