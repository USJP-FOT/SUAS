import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="hidden lg:flex flex-col bg-base-800/60 backdrop-blur border-r border-white/10 p-4 gap-2">
      <div class="px-3 py-2 mb-3">
        <div class="text-lg font-semibold">Campus</div>
        <div class="text-sm text-white/60">Dashboard</div>
      </div>

      <a routerLink="/students" routerLinkActive="active"
         class="nav">
        <span>Students</span>
      </a>
      <button class="nav">Locker</button>
      <button class="nav">Attendance</button>
      <button class="nav">Announcements</button>
      <button class="nav">Classrooms</button>
      <button class="nav">Trash Bin</button>

      <div class="mt-auto text-xs text-white/40 px-3 py-2">v1.0</div>
    </aside>
  `,
  styles: [`
    .nav{
      @apply w-full text-left px-3 py-2 rounded-[12px] hover:bg-white/5 border border-transparent
             transition text-white/80;
    }
    .active{ @apply bg-white/10 border-white/15 text-white; }
  `]
})
export class SidebarComponent {}
