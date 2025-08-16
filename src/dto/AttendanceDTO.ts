export interface AttendanceDTO {
  studentId: number;       // foreign key from Student
  studentName: string;
  attendanceDate: string;  // ISO date string (Java Date → string)
  attendanceTime: string;
  attendanceStatus: boolean;
}
