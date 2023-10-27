import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-term-two',
  templateUrl: './term-two.component.html',
  styleUrls: ['./term-two.component.scss']
})
export class TermTwoComponent {

  @Input() visible!: boolean
  @Output() close = new EventEmitter<void>();


  closeModal() {
    this.visible = false;
  }
}
