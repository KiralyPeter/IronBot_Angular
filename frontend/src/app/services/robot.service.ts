import { Injectable } from '@angular/core';
import { Robot } from '../shared/models/Robot';
import { sample } from 'rxjs';
import { sample_robots, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor() { }

  getAll():Robot[]{
    return sample_robots;
  }

  getAllRobotsBySearchTerm(searchTerm:string){
    return this.getAll().filter(robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags
  }

  getAllRobotsByTag(tag:string):Robot[]{
    return tag == "All"?
    this.getAll(): 
    // egyébként:
    this.getAll().filter(robot => robot.tags?.includes(tag));
  }

  getRobotById(robotId:string):Robot{
    return this.getAll().find(robot => robot.id == robotId) ?? new Robot();
  }
}
