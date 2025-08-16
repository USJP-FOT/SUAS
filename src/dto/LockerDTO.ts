// locker.dto.ts
export interface LockerDTO {
  id: number;
  name: string;
  isPenReady: boolean;
  isLocked: boolean;
  classRoomId: number;  // foreign key from ClassRoom
}
