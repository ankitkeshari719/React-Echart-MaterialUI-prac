import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-mycharts',
  templateUrl: './mycharts.component.html',
  styleUrls: ['./mycharts.component.css']
})
export class MychartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chartOption: EChartOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
}

}
