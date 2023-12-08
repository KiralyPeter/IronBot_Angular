import { Component, OnInit } from '@angular/core';
import { RobotService } from 'src/app/services/robot.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit{
  
  tags?:Tag[]
  constructor(robotService:RobotService){
    robotService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }


  ngOnInit(): void {
    
  }

}
