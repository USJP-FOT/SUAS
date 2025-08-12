import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shell/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="h-screen grid lg:grid-cols-[260px_1fr]">
      <app-sidebar />
      <main class="overflow-y-auto p-6 lg:p-10 space-y-8">
        <router-outlet />
      </main>
    </div>
  `
})
export class AppComponent {}
