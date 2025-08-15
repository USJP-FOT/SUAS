import { Routes } from '@angular/router';
import { Student } from './student/student';
import { Locker } from './locker/locker';
import { Announcment } from './announcment/announcment';
import { Attendance } from './attendance/attendance';
import { Trashbin } from './trashbin/trashbin';

export const routes: Routes = [
    { path: '', component: Student },
    { path: 'locker', component: Locker },
    { path: 'announcement', component: Announcment },
    { path: 'attendance', component: Attendance },
    { path: 'trash', component: Trashbin }
];
