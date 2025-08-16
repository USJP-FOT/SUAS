import { Observable } from "rxjs";
import { AttendanceDTO } from "../dto/AttendanceDTO";

export abstract class AttendanceService {
  /** DELETE attendance/delete?id=123 */
  abstract delete(id: number): Observable<void | boolean>;

  /** POST attendance/mark */
  abstract mark(attendance: AttendanceDTO): Observable<void | boolean>;

  /** GET attendance/all */
  abstract getAll(): Observable<AttendanceDTO[]>;
}