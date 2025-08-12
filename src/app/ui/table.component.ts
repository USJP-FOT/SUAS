import { Component, Input } from '@angular/core';
@Component({
  selector: 'ui-table',
  standalone: true,
  template: `
    <div class="card overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-white/5">
          <tr>
            <th *ngFor="let h of headers" class="text-left font-medium px-4 py-3 text-white/70">{{h}}</th>
          </tr>
        </thead>
        <tbody>
          <ng-content />
        </tbody>
      </table>
    </div>
  `
})
export class TableComponent { @Input() headers: string[] = []; }
