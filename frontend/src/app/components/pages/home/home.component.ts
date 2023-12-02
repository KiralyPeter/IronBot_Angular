import { Component, OnInit } from '@angular/core';
import { RobotService } from 'src/app/services/robot.service';
import { Robot } from 'src/app/shared/models/Robot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  robots:Robot[] = [];
  constructor(private robotService:RobotService){
    this.robots = robotService.getAll();
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
