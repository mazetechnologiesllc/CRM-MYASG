import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';

// Models
import { AppUser } from '../../_models';

// Services
import { AuthenticationProvider, LocalStorageProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-manager-dashboard',
  templateUrl: 'manager-dashboard.html',
})
export class ManagerDashboardPage implements OnInit {

  loggedInUser: AppUser;
  loggedInUserName: string = '';

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  lineChart: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {

    if (this.loggedInUser) {

      if (this.loggedInUser.suffix) {
        this.loggedInUserName = this.loggedInUserName + this.loggedInUser.suffix + ' ';
      }
      if (this.loggedInUser.firstName) {
        this.loggedInUserName = this.loggedInUserName + this.loggedInUser.firstName + ' ';
      }
      if (this.loggedInUser.middleName) {
        this.loggedInUserName = this.loggedInUserName + this.loggedInUser.middleName + ' ';
      }
      if (this.loggedInUser.lastName) {
        this.loggedInUserName = this.loggedInUserName + ' ' + this.loggedInUser.lastName;
      }
    }

  }

  ionViewDidLoad() {

    this.createCharts();

  }

  // Custom Methods

  viewLeadList() {
    this.navCtrl.setRoot('ListLeadPage');
  }

  viewAffiliateList() {
    this.navCtrl.setRoot('ListAffiliatePage');
  }

  createCharts() {

    // bar Chart

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ['1 Week', '2 Week', '3 Week', '4 Week', '5 Week'],
        // datasets: [{
        //   label: '',
        //   data: [12, 19, 3, 5, 2, 3],
        //   backgroundColor: [
        //     'rgba(255, 99, 132, 0.2)',
        //     'rgba(54, 162, 235, 0.2)',
        //     'rgba(255, 206, 86, 0.2)',
        //     'rgba(75, 192, 192, 0.2)',
        //     'rgba(153, 102, 255, 0.2)',
        //     'rgba(255, 159, 64, 0.2)'
        //   ],
        //   borderColor: [
        //     'rgba(255,99,132,1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)'
        //   ],
        //   borderWidth: 1
        // }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

    // line Chart

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ['1 Week', '2 Week', '3 Week', '4 Week', '5 Week'],
        // datasets: [
        //   {
        //     label: '',
        //     fill: false,
        //     lineTension: 0.1,
        //     backgroundColor: "rgba(75,192,192,0.4)",
        //     borderColor: "rgba(75,192,192,1)",
        //     borderCapStyle: 'butt',
        //     borderDash: [],
        //     borderDashOffset: 0.0,
        //     borderJoinStyle: 'miter',
        //     pointBorderColor: "rgba(75,192,192,1)",
        //     pointBackgroundColor: "#fff",
        //     pointBorderWidth: 1,
        //     pointHoverRadius: 5,
        //     pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //     pointHoverBorderColor: "rgba(220,220,220,1)",
        //     pointHoverBorderWidth: 2,
        //     pointRadius: 1,
        //     pointHitRadius: 10,
        //     //data: [65, 59, 80, 81, 56, 55, 40],
        //     spanGaps: false,
        //   }
        // ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }

}
