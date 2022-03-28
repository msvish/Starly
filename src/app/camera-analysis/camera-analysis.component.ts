import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-analysis',
  templateUrl: './camera-analysis.component.html',
  styleUrls: ['./camera-analysis.component.css']
})
export class CameraAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  dataSource: Object[] = [
     [73,0],
     [39,0],
     [26,0], 
     [0,36], 
     [94,0],
    
 ];

xAxis: Object = {
  valueType:"Numeric",
  minimum: 0,
  maximum: 4,
};

yAxis: Object = {
    labels: ['John Doe','Nancy'],
};

}
