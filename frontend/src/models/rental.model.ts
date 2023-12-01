import { Robot } from "./robot.model";
import { User } from "./user.model";

export interface Rental {
    id: number;
    rentalGroup: string;
    userId: number;
    robotId: number;
    startDate: Date;
    endDate: Date;
    rentalFee: number;
    rentalDeposit: number;
    rentalTotalAmount: number;
    isDepositPaid: boolean;
    isRentalTotalAmountPaid: boolean;
    isDepositRefunded: boolean;
    status: number;
    timeStamp: Date;
    robot: Robot;
    user: User;
  }