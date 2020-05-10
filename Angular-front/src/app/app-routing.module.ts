import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountComponent} from './account/account.component';
import {CustomGuard} from './services/custom.guard';


const routes: Routes = [
  /*{
    path: 'unauthorized', component: UnauthorizedComponent
  },*/
  {
    path: 'userOrAdmin', component: AccountComponent,
    canActivate: [CustomGuard],
    data: { verification: { type: 'SOME_ROLES', roles: ['user', 'admin'] } }
  },
  {
    path: 'admin', component: AccountComponent,
    canActivate: [CustomGuard],
    data: { verification: { type: 'SOME_ROLES', roles: ['admin'] } }
  },
  {
    path: 'public', component: AccountComponent
  },
  /*{
    path: 'admin',
    loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule),
    canActivate: [CustomGuard],
    data: { verification: { type: 'SOME_ROLES', roles: ['user'] } },
  },
  {
    path: 'public',
    loadChildren: () => import('./loan/loan.module').then(mod => mod.LoanModule),
    canActivate: [CustomGuard],
    data: { verification: { type: 'SOME_ROLES', roles: ['admin'] } },
  },*/
  {
    path: '', redirectTo: '/public',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
