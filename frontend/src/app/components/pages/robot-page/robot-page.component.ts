import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { RobotService } from 'src/app/services/robot.service';
import { Robot } from 'src/app/shared/models/Robot';

@Component({
  selector: 'app-robot-page',
  templateUrl: './robot-page.component.html',
  styleUrls: ['./robot-page.component.css']
})
export class RobotPageComponent implements OnInit{
  
  robot!:Robot;
  constructor(activatedRoute:ActivatedRoute, robotService:RobotService,
    private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      robotService.getRobotById(params.id).subscribe(serverRobot => {
        this.robot = serverRobot;
      });
    })
  }
  
  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.robot);
    this.router.navigateByUrl('/cart-page');
  }
}
