import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RobotService } from 'src/app/services/robot.service';
import { Robot } from 'src/app/shared/models/Robot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  robots:Robot[] = [];
  constructor(private robotService:RobotService, activatedRoute:ActivatedRoute){
    let robotObservable:Observable<Robot[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        robotObservable = this.robotService.getAllRobotsBySearchTerm(params.searchTerm);
      else if(params.tag)
        robotObservable = this.robotService.getAllRobotsByTag(params.tag);
      else
        robotObservable = robotService.getAll();

        robotObservable.subscribe((serverRobots)=>{
          this.robots = serverRobots;
        })
    })
    
  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
