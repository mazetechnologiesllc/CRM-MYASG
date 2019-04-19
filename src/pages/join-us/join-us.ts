import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { ListStateModel, ManagerDropDownModel, SignUpModel, ServiceDropDownModel } from '../../_models';

// Services
import { StateProvider, LoadingProvider, ManagerProvider, ServiceProvider, AuthenticationProvider } from '../../providers';

// Validators
// import { AgeValidator } from '../../validators/age.validator';
// import { UserNameValidator } from '../../validators/username.validator';

@IonicPage()
@Component({
  selector: 'page-join-us',
  templateUrl: 'join-us.html',
})
export class JoinUsPage implements OnInit {

  signUpView: string = "personalInfo";
  public url:string='/join_network.php';

  public submitAttempt: boolean = false;

  personalInfoForm: FormGroup;
  paymentInfoForm: FormGroup;

  selectedUserType: string;
  selectedCreateType: string;
  selectedManager: string;

  states: ListStateModel[] = [];
  managers: ManagerDropDownModel[] = [];
  listServices: ServiceDropDownModel[] = [];

  signUpAmount: number = 0;
  monthlyFee: number = 0;
  totalAmount: number = 0;

  errorMessage: string;

  signUpModel: SignUpModel = new SignUpModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder,
    public cdr: ChangeDetectorRef,
    public loadingProvider: LoadingProvider,
    public stateProvider: StateProvider,
    public managerProvider: ManagerProvider,
    public serviceProvider: ServiceProvider,
    public authenticationProvider: AuthenticationProvider
  ) {

    this.personalInfoForm = this.formBuilder.group({
      userType: ['', Validators.required],
      companyName: [''],
      services: [''],
      createType: [''],
      manager: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      suffix: [''],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]],
      contact: ['', [Validators.required, Validators.pattern(/^\(([0-9]{3})\)[-]([0-9]{3})[-]([0-9]{4})$/)]],
      gender: ['', Validators.required],
      ssn: ['', [Validators.required, Validators.pattern(/^[0-9]{3}-[0-9]{2}\-[0-9]{4}/)]],
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      addLine1: ['', Validators.required],
      addLine2: [''],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}/)]],
      internalNotes: [''],
    });

    this.paymentInfoForm = this.formBuilder.group({
      payBy: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardExpirationDate: ['', Validators.required],
      cvv: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      addLine1: ['', Validators.required],
      addLine2: [''],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}/)]],
    });

    // this.slideOneForm = formBuilder.group({
    //   firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //   lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //   age: ['', AgeValidator.isValid]
    // });

  }

  ngOnInit() {
    this.loadServices();
    this.loadManagers();
    this.loadStates();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinUsPage');
    let params = this.navParams.data;
    if (params.id) {
      this.url = '/lead.php';
      this.signUpModel.services = [Number(params.id)]
      this.signUpModel.userType = 6;
      this.personalInfoForm.controls['services'].setValue(params.id);
      this.personalInfoForm.controls['userType'].setValue('client');
      this.onUserTypeChange();
    }
  }

  // Custom Methods
  loadServices(): void {
    this.serviceProvider.getServices().subscribe(response => {
      if (response) {

        if (JSON.parse(response['_body'])['code'] == 404) {
          this.errorMessage = 'Not Authorized!';
          return;
        }

        for (let item of JSON.parse(response['_body'])) {
          this.listServices.push({
            id: item.id,
            service: item.service,
            serviceCategory: item.serviceCategory,
            categoryId: item.cat_id,
            companyId: item.company_id,
            flag: item.fleg
          });
        }

      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        //this.showError(error);
        console.log(error);
      });

  }

  loadManagers(): void {
    this.managerProvider.getManagersForDropDown().subscribe(response => {
      if (response) {

        if (JSON.parse(response['_body'])['code'] == 404) {
          this.errorMessage = 'Not Authorized!';
          return;
        }

        for (let item of JSON.parse(response['_body'])) {
          this.managers.push({
            id: item.id,
            name: item.name,
            userName: item.username
          });
        }

      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        //this.showError(error);
        console.log(error);
      });

  }


  loadStates(): void {

    this.stateProvider.getStates().subscribe(response => {
      if (response) {

        if (JSON.parse(response['_body'])['code'] == 404) {
          this.errorMessage = 'Not Authorized!';
          return;
        }

        for (let item of JSON.parse(response['_body'])) {
          this.states.push({
            id: item.id,
            name: item.stateName,
            countryId: item.countryId,
            status: item.status
          });
        }

      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        //this.showError(error);
        console.log(error);
      });
  }

  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  back() {
    if (this.signUpView == 'paymentInfo') {
      this.signUpView = 'personalInfo'
    }
  }

  continue() {
    if (this.signUpView == 'personalInfo') {
      this.signUpView = 'paymentInfo';
    }
    
  }

  join() {
    this.submitAttempt = true;

    //this.signUpModel.userType = this.personalInfoForm.value.userType;
    this.signUpModel.createType = this.personalInfoForm.value.createType;
    this.signUpModel.manager = this.personalInfoForm.value.manager;
    this.signUpModel.companyId = 162;
    this.signUpModel.companyName = this.personalInfoForm.value.companyName;
    this.signUpModel.services = this.personalInfoForm.value.services;
    this.signUpModel.firstName = this.personalInfoForm.value.firstName;
    this.signUpModel.middleName = this.personalInfoForm.value.middleName;
    this.signUpModel.lastName = this.personalInfoForm.value.lastName;
    this.signUpModel.suffix = this.personalInfoForm.value.suffix;
    this.signUpModel.gender = this.personalInfoForm.value.gender;
    this.signUpModel.dateOfBirth = this.personalInfoForm.value.dateOfBirth;
    this.signUpModel.contact = this.personalInfoForm.value.contact;
    this.signUpModel.email = this.personalInfoForm.value.email;
    this.signUpModel.country = this.personalInfoForm.value.country;
    this.signUpModel.state = this.personalInfoForm.value.state;
    this.signUpModel.city = this.personalInfoForm.value.city;
    this.signUpModel.addLine1 = this.personalInfoForm.value.addLine1;
    this.signUpModel.addLine2 = this.personalInfoForm.value.addLine2;
    this.signUpModel.zip = this.personalInfoForm.value.zip;
    this.signUpModel.ssn = this.personalInfoForm.value.ssn;
    this.signUpModel.internalNotes = this.personalInfoForm.value.internalNotes;
    this.signUpModel.payBy = this.paymentInfoForm.value.payBy;
    this.signUpModel.cardHolderName = this.paymentInfoForm.value.cardHolderName;
    this.signUpModel.cardNumber = this.paymentInfoForm.value.cardNumber;
    this.signUpModel.cardExpMonth = this.paymentInfoForm.value.cardExpirationDate.substr(0, 2);
    this.signUpModel.cardExpYear = this.paymentInfoForm.value.cardExpirationDate.substr(3, 4);
    this.signUpModel.cvv = this.paymentInfoForm.value.cvv;
    this.signUpModel.amount = this.totalAmount.toString();
    this.signUpModel.paymentCountry = this.paymentInfoForm.value.country;
    this.signUpModel.paymentState = this.paymentInfoForm.value.state;
    this.signUpModel.paymentCity = this.paymentInfoForm.value.city;
    this.signUpModel.paymentAddLine1 = this.paymentInfoForm.value.paymentAddLine1;
    this.signUpModel.paymentAddLine2 = this.paymentInfoForm.value.paymentAddLine2;
    this.signUpModel.paymentZip = this.paymentInfoForm.value.paymentZip;


    this.authenticationProvider.signUp(this.signUpModel, this.url).subscribe(response => {
      console.log(response)
      this.showLongToast((response as any)._body)
      this.navCtrl.setRoot('MenuPage');
    }, error => {
      console.log(error)
    });
  }

  showLongToast(response: any) {
    let toast = this.toastCtrl.create({
      message: response,
      duration: 3000,
    });
    toast.present();
  }

  calculateJoiningFee(userType: string): void {

    if (userType === 'company') {
      this.signUpModel.userType = 7;
      this.signUpAmount = 4995;
      this.monthlyFee = 199;
    } else if (userType === 'manager') {
      this.signUpModel.userType = 3;
      this.signUpAmount = 0;
      this.monthlyFee = 199;
    } else if (userType === 'affiliate') {
      this.signUpModel.userType = 4;
      this.signUpAmount = 0;
      this.monthlyFee = 139;
    } else if (userType === 'client') {
      this.signUpModel.userType = 6;
      this.signUpAmount = 0;
      this.monthlyFee = 1;
    } else {
      this.signUpAmount = 0;
      this.monthlyFee = 0;
    }
    this.totalAmount = this.signUpAmount + this.monthlyFee;
  }

  setOnUserTypeChangeVariablesAndValidators(userType: string): void {
    if (userType === 'company') {
      this.personalInfoForm.controls.companyName.setValidators([Validators.required]);
      this.personalInfoForm.controls.createType.setValidators(null);
      this.personalInfoForm.controls.services.setValidators(null);

      this.signUpModel.createType = '';
      this.signUpModel.manager = null;
      this.signUpModel.services = [];

    } else if (userType === 'manager' || userType === 'affiliate') {
      this.personalInfoForm.controls.createType.setValidators([Validators.required]);
      this.personalInfoForm.controls.companyName.setValidators(null);
      this.personalInfoForm.controls.services.setValidators(null);

      this.signUpModel.companyName = '';
      this.signUpModel.services = [];

    } else if (userType === 'client') {
      this.personalInfoForm.controls.services.setValidators([Validators.required]);
      this.personalInfoForm.controls.companyName.setValidators(null);
      this.personalInfoForm.controls.createType.setValidators(null);

      this.signUpModel.createType = '';
      this.signUpModel.manager = null;
      this.signUpModel.companyName = '';

    } else {
    }

    this.personalInfoForm.controls.companyName.updateValueAndValidity();
    this.personalInfoForm.controls.createType.updateValueAndValidity();
    this.personalInfoForm.controls.services.updateValueAndValidity();
  }

  // Events

  onUserTypeChange(): void {
    this.selectedUserType = '';
    this.selectedUserType = this.personalInfoForm.get('userType').value;
    this.cdr.detectChanges();

    this.calculateJoiningFee(this.selectedUserType);
    this.setOnUserTypeChangeVariablesAndValidators(this.selectedUserType);
  }

  onCreateTypeChange(): void {
    this.selectedCreateType = '';
    this.selectedCreateType = this.personalInfoForm.get('createType').value;

    if (this.selectedCreateType === 'under') {
      this.personalInfoForm.controls.manager.setValidators([Validators.required]);
    } else {
      this.personalInfoForm.controls.manager.setValidators(null);
    }
    this.personalInfoForm.controls.manager.updateValueAndValidity();

    this.cdr.detectChanges();
  }

  onServicesChange(): void {
    this.signUpModel.services = [];
    this.signUpModel.services = this.personalInfoForm.get('services').value;
    this.cdr.detectChanges();
  }

  // onManagerChange(): void {
  //   this.selectedManager = this.personalInfoForm.get('manager').value;
  //   this.cdr.detectChanges();
  // }


}
