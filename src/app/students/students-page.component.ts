import { Component } from '@angular/core';
import { FieldComponent } from '../ui/field.component';
import { SelectComponent } from '../ui/select.component';
import { TableComponent } from '../ui/table.component';
import { ActionsComponent } from '../ui/actions.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'students-page',
  imports: [FieldComponent, SelectComponent, TableComponent, ActionsComponent, NgFor],
  template: `
    <section class="space-y-6">
      <header class="flex items-end justify-between">
        <div>
          <h1 class="text-2xl font-semibold">Student Management</h1>
          <p class="text-white/60 text-sm">Create, search and maintain student records.</p>
        </div>
        <ui-actions />
      </header>

      <!-- Form -->
      <div class="card p-5 grid md:grid-cols-2 gap-4">
        <ui-field label="Name" placeholder="Jane Appleseed" class="md:col-span-2"/>
        <ui-field label="Phone" type="tel" placeholder="+94 7X XXX XXXX"/>
        <ui-select label="Academic Year">
          <option disabled selected>Select year</option>
          <option>2024/2025</option>
          <option>2025/2026</option>
        </ui-select>
        <ui-field label="Email Address" type="email" placeholder="name@school.edu" class="md:col-span-2"/>
      </div>

      <!-- Table -->
      <ui-table [headers]="['ID','Name','Email Address','Academic Year','Phone']">
        <tr *ngFor="let s of rows" class="border-t border-white/10 hover:bg-white/5">
          <td class="px-4 py-3">{{s.id}}</td>
          <td class="px-4 py-3">{{s.name}}</td>
          <td class="px-4 py-3">{{s.email}}</td>
          <td class="px-4 py-3"><span class="badge">{{s.year}}</span></td>
          <td class="px-4 py-3">{{s.phone}}</td>
        </tr>
      </ui-table>
    </section>
  `
})
export class StudentsPageComponent {
  rows = [
    { id:'1001', name:'Kavindi Perera', email:'k.perera@campus.edu', year:'2024/25', phone:'+94 7X XXX XXXX' },
    { id:'1002', name:'Nimal Fernando', email:'n.fernando@campus.edu', year:'2024/25', phone:'+94 7X XXX XXXX' },
  ];
}
