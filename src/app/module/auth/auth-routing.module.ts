import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './page/auth/auth.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [

  {

    path: "", component: AuthComponent, children: [

      {
        path: "sing-up", component: SingUpComponent
      },
      {
        path: "singup", component: SingupComponent
      },
      {
        path: "**", redirectTo: "sing-up"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
