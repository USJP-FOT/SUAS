import { Observable } from "rxjs";
import { LockerDTO } from "../dto/LockerDTO";

export abstract class LockerService {
  /** GET /locker/all */
  abstract getAll(): Observable<LockerDTO[]>;

  /** POST /locker/add (add or update) */
  abstract add(locker: LockerDTO): Observable<void | boolean>;

  /** DELETE /locker/delete?id=123 */
  abstract delete(id: number): Observable<void | boolean>;

  /** PUT /locker/set-status?id=123&set=true */
  abstract setStatus(id: number, set: boolean): Observable<void | boolean>;

  /** GET /locker/get-status?id=123 */
  abstract getStatus(id: number): Observable<boolean>;

  /** PUT /locker/set-pen-status?id=123&set=true */
  abstract setPenStatus(id: number, set: boolean): Observable<void | boolean>;

  /** GET /locker/get-pen-status?id=123 */
  abstract getPenStatus(id: number): Observable<boolean>;
}