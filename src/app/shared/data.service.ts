import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ExperienceService } from '../experience/experience.service';
import { Experience } from '../experience/experience.model';

@Injectable()
export class DataService {
  env = "http://localhost:8000"

  constructor(private http: Http) { }

  getAllExperiences(){
    var url = this.env + "/experience";

    return this.http.get(url)
      .map(res => res.json()
    );
  }

  addExperience(experience: any){
    var url = this.env + "/experience";
    var result;
    var objectToSend = JSON.stringify(experience);

    console.log('jimminy crickets');
    console.log(objectToSend);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(url, objectToSend, { headers: headers })
      .map((res: Response) => res.json())
      .subscribe(res => {
       result = res;
       console.log(result);
     });
  }
}
