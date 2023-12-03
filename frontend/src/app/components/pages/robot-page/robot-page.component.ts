import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RobotService } from 'src/app/services/robot.service';
import { Robot } from 'src/app/shared/models/Robot';

@Component({
  selector: 'app-robot-page',
  templateUrl: './robot-page.component.html',
  styleUrls: ['./robot-page.component.css']
})
export class RobotPageComponent implements OnInit{
  
  robot!:Robot;
  constructor(activatedRoute:ActivatedRoute, robotService:RobotService){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.robot = robotService.getRobotById(params.id);
    })
  }
  
  ngOnInit(): void {
    
  }

}
