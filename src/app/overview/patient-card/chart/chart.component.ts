import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data: any;
  chartOptions: any;

  ngOnInit(): void {
    this.setChartOptions();

  }
  private setChartOptions() {
    this.chartOptions = {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            ticks: {
              min: 0,
              max: 100
            }
          }
        ]
      }
    };
  }

}
