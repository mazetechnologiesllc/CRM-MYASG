import { Component, OnInit, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider, AuthenticationProvider, ServiceProvider } from '../../providers';
import { ServiceDetailsPage } from '../service-details/service-details';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(-65px)', offset: 0.3 }),
        style({ transform: 'translateX(0)', offset: 1.0 })
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({ transform: 'translateX(0)', offset: 0 }),
        style({ transform: 'translateX(65px)', offset: 0.3 }),
        style({ transform: 'translateX(0)', offset: 1.0 })
      ])))
    ])
  ]
})
export class HomePage implements OnInit {

  @ViewChild(Slides) slides: Slides;

  skipMsg: string = "Skip";
  state: string = 'x';

  loggedInUser: AppUser;

  cpses: any[];
  allServices: any[];
  popServices: any[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider,
    public serviceProvider:ServiceProvider
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {

    this.cpses = [
      { title: 'Manifestation Education', desc: 'Financial life coaching, seminar and presentation training.', imgUrl: 'assets/imgs/h3.jpeg' },
      { title: 'Marketing Enterprise', desc: 'Small business enterprise MLM membership.', imgUrl: 'assets/imgs/h2.jpg' },
      { title: 'Monetary Empowerment', desc: 'Individual affiliate manager and affiliate agent MLM membership.', imgUrl: 'assets/imgs/h3.jpeg' },
      { title: 'Rapid 3 Consulting', desc: 'Financial and credit consulting.', imgUrl: 'assets/imgs/h2.jpg' },
      { title: 'Mendelson Burke Accounting LLC', desc: 'Taxes, accounting, bookkeeping, payroll processing.', imgUrl: 'assets/imgs/h3.jpeg' },
      { title: 'FON VON Auto', desc: 'Auto financing and leasing of new vehicles.', imgUrl: 'assets/imgs/h2.jpg' },
      { title: 'Carter Thomas', desc: 'Business development services; business plans, incorporation, and LLC formation, minority certification, sam registration. Strategic partnership planning.', imgUrl: 'assets/imgs/h3.jpeg' },
      { title: 'Maze Technologies', desc: 'Software development, website development, mobile application development, I.T infrastructure development, crypto-currency consulting.', imgUrl: 'assets/imgs/h2.jpg' },
      { title: 'Newtech Marketing Group', desc: 'Corporate branding, logos, brochures, flyers, business cards, mail, online, social media, television, and radio marketing campaigns for busines.', imgUrl: 'assets/imgs/h3.jpeg' },
      { title: 'American Monetary Capital Funding', desc: 'Loan consulting from 20k to 5 million.', imgUrl: 'assets/imgs/h2.jpg' },
      { title: 'New Fortune Realty', desc: 'Licensed realtor, real-estate purchases lease and rentals, real-estate investments, mortgage, hard money and short-sale consulting.', imgUrl: 'assets/imgs/h3.jpeg' }
    ]

    // this.services = [
    //   { name: 'Sales Manager', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,995' },
    //   { name: 'Sales Affiliate Recruitment', imgUrl: 'assets/imgs/h2.jpg', price: '$139' },
    //   { name: 'Silver Package (3 months)', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,995' },
    //   { name: 'Gold Package (6 months)', imgUrl: 'assets/imgs/h2.jpg', price: '$2,995' },
    //   { name: 'Platinum Package (12 months)', imgUrl: 'assets/imgs/h3.jpeg', price: '$5,995' },
    //   { name: 'Tradeline 1-10k (Authorized User)', imgUrl: 'assets/imgs/h2.jpg', price: '$900' },
    //   { name: 'Tradeline 10-20k (Authorized User)', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,200' },
    //   { name: 'Tradeline 20-40k (Authorized User)', imgUrl: 'assets/imgs/h2.jpg', price: '$1,500' },
    //   { name: 'Funding Processing Fee', imgUrl: 'assets/imgs/h3.jpeg', price: '$497' },
    //   { name: 'Funding Business', imgUrl: 'assets/imgs/h2.jpg', price: '$200k (Avg Loan Amt)' },
    //   { name: 'Funding Personal', imgUrl: 'assets/imgs/h3.jpeg', price: '$70k (Avg Loan Amt)' },
    //   { name: 'W-2 and 1099 Taxes', imgUrl: 'assets/imgs/h2.jpg', price: '$375-$600' },
    //   { name: 'Tax Corporate', imgUrl: 'assets/imgs/h3.jpeg', price: '$750' },
    //   { name: 'Partner', imgUrl: 'assets/imgs/h2.jpg', price: '$375' },
    //   { name: 'Ammendments', imgUrl: 'assets/imgs/h3.jpeg', price: '$375' },
    //   { name: 'Tax Resolution', imgUrl: 'assets/imgs/h2.jpg', price: '15% of Liability' },
    //   { name: 'SEO, PPC and SEM', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,500/Monthly' },
    //   { name: 'Corporate Branding', imgUrl: 'assets/imgs/h2.jpg', price: 'Starts at $6,000' },
    //   { name: 'Social Media Marketing', imgUrl: 'assets/imgs/h3.jpeg', price: '$1,500/Monthly' },
    //   { name: 'Visual Marketing (Video Commercials)', imgUrl: 'assets/imgs/h2.jpg', price: 'Starts at $3,000' },
    //   { name: 'Graphic Designing', imgUrl: 'assets/imgs/h3.jpeg', price: 'Starts at $600' },
    //   { name: 'Business Incorporation', imgUrl: 'assets/imgs/h2.jpg', price: '$600' },
    //   { name: 'S Corp', imgUrl: 'assets/imgs/h3.jpeg', price: '$600' },
    //   { name: 'C Corp', imgUrl: 'assets/imgs/h2.jpg', price: '$600' },
    //   { name: 'LLC', imgUrl: 'assets/imgs/h3.jpeg', price: '$600' },
    //   { name: 'Grant Writing', imgUrl: 'assets/imgs/h2.jpg', price: '$3,600' },
    //   { name: 'SAM Registration', imgUrl: 'assets/imgs/h3.jpeg', price: '$3,000' },
    //   { name: 'MBE & WMBE 8a Certifications', imgUrl: 'assets/imgs/h2.jpg', price: '$6,900' },
    //   { name: 'Business Plan Basic', imgUrl: 'assets/imgs/h3.jpeg', price: '$500' },
    //   { name: 'Business Plan Detailed', imgUrl: 'assets/imgs/h2.jpg', price: '$3,000' },
    //   { name: 'Business Plan 100 Pages', imgUrl: 'assets/imgs/h3.jpeg', price: '$6,000' },
    //   { name: 'Auto Lease or Finance', imgUrl: 'assets/imgs/h2.jpg', price: 'MSRP' }
    // ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.loadServices();
  }

  loadServices(){
    this.serviceProvider.getServices().subscribe((data)=>{
      console.log(data)
      let services = JSON.parse(data['_body']);
      if(services.length>0){
        this.popServices = services.map((e =>{ if(e.pop_service=='Y') return e })).filter((e)=> e!==undefined)
      }
      this.allServices = services;
    }, error=>{

    })
  }


  openServiceDetail(service){
    this.navCtrl.push('ServiceDetailsPage', service)
  }

  // Custom Methods
  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Alright, I got it";
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }

}
