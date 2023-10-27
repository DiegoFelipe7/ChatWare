import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './page/auth/auth.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { TermsOneComponent } from './components/terms-one/terms-one.component';
import { SingupComponent } from './components/singup/singup.component';
import { TermTwoComponent } from './components/term-two/term-two.component';
@NgModule({
  declarations: [
    AuthComponent,
    SingUpComponent,
    TermsOneComponent,
    SingupComponent,
    TermTwoComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    TabMenuModule,
    ButtonModule,
    InputMaskModule,
    InputSwitchModule,
    DialogModule
  ]
})
export class AuthModule { }
