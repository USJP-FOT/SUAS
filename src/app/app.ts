import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./sidebar/sidebar";
import { Student } from "./student/student";
import { Locker } from "./locker/locker";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'suas';
  isDark = false;

  ngOnInit() {
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDark);
  }
}
