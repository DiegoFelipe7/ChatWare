import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  formSingUp: FormGroup
  items: MenuItem[];
  visible: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formSingUp = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      valid: ["", Validators.required]
    })
    this.items = [
      { label: 'Sing up', icon: 'pi pi-user', routerLink: "/auth/sing-up" },
      { label: 'Sing up', icon: 'pi pi-user', routerLink: "/auth/singup" },
    ];
  }
  validateInputs(field: string, type: string) {
    const control = this.formSingUp.controls?.[field];
    return control?.errors && control.touched && control.hasError(type);
  }

  onActiveItemChange(event: MenuItem) {
    localStorage.setItem("tab-index", JSON.stringify(event))
    this.router.navigate([event.routerLink])
  }
  save() {
    if (this.formSingUp.invalid) {
      this.formSingUp.markAllAsTouched()
      return;
    }

    this.formSingUp.reset()
    this.openModal()
  }
  openModal() {
    this.visible = true;
  }
}
