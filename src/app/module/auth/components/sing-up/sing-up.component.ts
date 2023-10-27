import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  formSingUp: FormGroup
  items: MenuItem[];
  visible: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formSingUp = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      phone: ["", Validators.required],
      address: ["", Validators.required],
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

  close() {
    this.visible = false
  }
}
