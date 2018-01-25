import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'experience';
  experiences : any = [];

  constructor(private dataService: DataService){}

  ngOnInit() {
    console.log('hi');

    this.dataService.getAllExperiences().subscribe(data => {
      console.log("data ");
      console.log(data);

      this.experiences = data;
    });

    console.log(this.experiences);

    console.log('ho');
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
