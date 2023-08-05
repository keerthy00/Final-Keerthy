import  {Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any[] = [];  
  data1: any[] = []; 
  data2: any[] = []; 
  data3: any[] = []; 
  title = 'ng-chart';
  constructor(private http: HttpClient) {}
  //src="../assets/search.png
  ngOnInit(): void {
    this.http.get<any[]>('assets/data.json').subscribe((data) => {
    this.data = data;
    this.createBarChart();
    
    });

    this.http.get<any[]>('assets/data1.json').subscribe((data1) => {
      this.data1 = data1;
      this.createLineChart();
      
      });

      this.http.get<any[]>('assets/data2.json').subscribe((data2) => {
        this.data2 = data2;
        this.createdoughnutChart();
        
        });

        this.http.get<any[]>('assets/data3.json').subscribe((data3) => {
          this.data3 = data3;
          this.createBarChart2();
          
          });
   
  }
  createBarChart(): void {
    const labels = this.data.map((item) => item.label);
    const values = this.data.map((item) => item.value);
    
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: labels,
    datasets: [{
    label: 'Sales Summary',
    data: values,
    backgroundColor: 'rgba(255, 0, 0, 100)',
            borderColor:'rgba(255, 0, 0, 100)',
            borderWidth: 3,
    }]
    },
    options: {
    scales: {
    y: {
    beginAtZero: true
    }
    }
    }
    });
    }

    createLineChart(): void {
      const labels = this.data1.map((item) => item.label);
      const values = this.data1.map((item) => item.value);
      
      const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
      type: 'line',
      data: {
      labels: labels,
      datasets: [{
      label: 'Total Profit',
      data: values,
      backgroundColor: 'rgba(255, 0, 0, 100)',
              borderColor:'rgba(255, 0, 0, 100)',
              borderWidth: 1,
      }]
      },
      options: {
      scales: {
      y: {
      beginAtZero: true
      }
      }
      }
      });
      }
      createdoughnutChart(): void {
        const labels = this.data2.map((item) => item.label);
        const values = this.data2.map((item) => item.value);
        
        const ctx = document.getElementById('pie') as HTMLCanvasElement;
        const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: labels,
        datasets: [{
        label: 'ss',
        data: values,
        backgroundColor: ['rgba(255, 0, 0, 100)',
                          'rgba(174, 190, 215, 100)',],
                
        hoverOffset: 80
        }]
        },
        options: {
        scales: {
        y: {
        beginAtZero:false
        }
        }
        }
        });
        }

        createBarChart2(): void {
          const labels = this.data3.map((item) => item.label);
          const values = this.data3.map((item) => item.value);
          
          const ctx = document.getElementById('BarChart') as HTMLCanvasElement;
          const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
          labels: labels,
          datasets: [{
          label: 'Client Activity',
          data: values,
          backgroundColor: 'rgba(255, 0, 0, 100)',
                  borderColor:'rgba(255, 0, 0, 100)',
                  borderWidth: 3,
          }]
          },
          options: {
          scales: {
          y: {
          beginAtZero: true
          }
          }
          }
          });
          }

        
  /*createBarChart(): void{
    
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun','Jul'],
        datasets: [
          {
            label: 'Sales summary',
            data: [7.5, 6.2, 9.8, 12.5, 18.2, 23,20.7],
            backgroundColor: 'rgba(255, 0, 0, 100)',
            borderColor:'rgba(255, 0, 0, 100)',
            borderWidth: 3,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }*/
}
  


  
  