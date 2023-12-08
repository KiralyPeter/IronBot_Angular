import { Injectable } from '@angular/core';
import { Robot } from '../shared/models/Robot';
import { Observable, sample } from 'rxjs';
import { sample_robots, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { ROBOTS_BY_ID_URL, ROBOTS_BY_SEARCH_URL, ROBOTS_BY_TAG_URL, ROBOTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Robot[]>{
    return this.http.get<Robot[]>(ROBOTS_URL);
  }

  getAllRobotsBySearchTerm(searchTerm:string){
    return this.http.get<Robot[]>(ROBOTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(ROBOTS_BY_TAG_URL);
  }

  getAllRobotsByTag(tag:string):Observable<Robot[]>{
    return tag == "All"?
    this.getAll(): 
    // egyébként:
    this.http.get<Robot[]>(ROBOTS_BY_TAG_URL + tag);
  }

  getRobotById(robotId:string):Observable<Robot>{
    return this.http.get<Robot>(ROBOTS_BY_ID_URL + robotId);
  }
}
