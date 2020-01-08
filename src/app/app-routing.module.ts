import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { GenresListComponent } from './genres-list/genres-list.component';

const routes:Routes = [
  {
    path:'',
    component:HomepageComponent,
    children : [
      {
        path: 'genres-list',
        component: GenresListComponent
      }
    ]

  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
