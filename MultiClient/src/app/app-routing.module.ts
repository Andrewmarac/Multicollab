import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { ListInfluencerComponent } from './list-influencer/list-influencer.component';

import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path:'',component:AboutComponent},
    { path:'search',component:SearchComponent},
    { path:'category',component:CategoryComponent},
    { path:'list-influencer/:id',component:ListInfluencerComponent},
    { path:'profile/:id',component:ProfileComponent},
    { path:'assistenza',component:AssistenzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
