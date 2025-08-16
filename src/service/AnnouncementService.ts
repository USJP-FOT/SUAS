// services/announcement.service.ts
import { Observable } from 'rxjs';
import { AnnouncementDTO } from '../dto/AnnouncementDTO';


export abstract class AnnouncementService {
  /** POST announcement/add */
  abstract add(announcement: AnnouncementDTO): Observable<void | boolean>;

  /** GET announcement/get-all */
  abstract getAll(): Observable<AnnouncementDTO[]>;

  /** DELETE announcement/delete?id=123 */
  abstract deleteById(id: number): Observable<void | boolean>;
}
