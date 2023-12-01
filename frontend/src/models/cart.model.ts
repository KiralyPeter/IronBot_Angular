import { Robot } from "./robot.model";
import { User } from "./user.model";

export interface Cart {
    id: number;
    userId: number;
    robotId: number;
    startDate: Date;
    endDate: Date;
    timeStamp: Date;
    robot: Robot;
    user: User;
  }