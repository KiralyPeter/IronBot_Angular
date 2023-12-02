import { Injectable } from '@angular/core';
import { Robot } from '../shared/models/Robot';
import { sample } from 'rxjs';
import { sample_robots } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor() { }

  getAll():Robot[]{
    return sample_robots;
  }
}
