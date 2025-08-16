import { ClassMode } from "./enum/ClassMode";

export interface ClassRoomDTO {
  id: number;
  isReady: boolean;
  currentMode:ClassMode;  // enum
}
