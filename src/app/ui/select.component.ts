import { Component, Input } from '@angular/core';
@Component({
  selector: 'ui-select',
  standalone: true,
  template: `
    <label class="block text-sm mb-1 text-white/70">{{label}}</label>
    <select class="input appearance-none pr-10">
      <ng-content />
    </select>
  `
})
export class SelectComponent{ @Input() label = ''; }
