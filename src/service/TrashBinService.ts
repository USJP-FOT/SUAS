import { Observable } from "rxjs";
import { TrashBinDTO } from "../dto/TrashBinDTO";

export abstract class TrashBinService {
  /** POST /trashBin/add → returns created entity */
  abstract add(bin: TrashBinDTO): Observable<boolean>;

  /** GET /trashBin/all */
  abstract getAll(): Observable<TrashBinDTO[]>;

  /** PUT /trashBin/set-Capacity?id=..&capacity=.. */
  abstract setCapacity(id: number, capacity: number): Observable<boolean>;

  /** PUT /trashBin/garbage-type?id=..&garbageType=.. */
  abstract setGarbageType(id: number, garbageType: number): Observable<boolean>;
}