import { FlexboxPracComponent } from './flexbox/flexbox-prac/flexbox-prac.component';
import { MainComponent } from './echarts/main/main.component';
import { MychartsComponent } from './echarts/mycharts/mycharts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'Charts', component: MainComponent},
  { path: 'flexbox', component: FlexboxPracComponent },
  { path: '',
    redirectTo: '/Charts',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
