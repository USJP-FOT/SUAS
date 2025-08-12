import { Component } from '@angular/core';
@Component({
  selector: 'ui-actions',
  standalone: true,
  template: `
    <div class="flex gap-2">
      <button class="btn">Search</button>
      <button class="btn ghost">Delete</button>
    </div>
  `
})
export class ActionsComponent {}
