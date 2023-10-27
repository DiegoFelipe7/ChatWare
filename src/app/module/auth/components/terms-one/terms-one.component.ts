import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-terms-one',
  templateUrl: './terms-one.component.html',
  styleUrls: ['./terms-one.component.scss']
})
export class TermsOneComponent {
  @Input() visible!: boolean
  @Output() close = new EventEmitter<void>();


  closeModal() {
    this.visible = false;
  }
}
