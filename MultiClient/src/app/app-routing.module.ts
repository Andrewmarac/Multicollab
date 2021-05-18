import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InfluencerComponent } from './influencer/influencer.component';
const routes: Routes = [
    { path:'about',component:AboutComponent},
    { path:'influencer',component:InfluencerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
