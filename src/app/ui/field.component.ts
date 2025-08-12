import { Component, Input } from '@angular/core';
@Component({
  selector: 'ui-field',
  standalone: true,
  template: `
    <label class="block text-sm mb-1 text-white/70">{{label}}</label>
    <input class="input" [type]="type" [placeholder]="placeholder">
  `
})
export class FieldComponent{
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text'|'email'|'tel' = 'text';
}
