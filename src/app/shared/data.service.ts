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

    console.log(url);

    return this.http.get(url)
      .map(res => res.json());
  }
}
