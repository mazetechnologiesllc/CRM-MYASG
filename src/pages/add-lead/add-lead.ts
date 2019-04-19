import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';

// Models
import { AddLeadModel } from '../../_models';

// Services
import { LocalStorageProvider, LeadProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-add-lead',
  templateUrl: 'add-lead.html',
})
export class AddLeadPage {

  step: string;
  isAndroid: boolean = false;

  personalInfoForm: FormGroup;
  addressInfoForm: FormGroup;
  paymentInfoForm: FormGroup;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public leadProvider: LeadProvider,
    public cdr: ChangeDetectorRef,
    public localStorageProvider: LocalStorageProvider,
    public toastCtrl: ToastController,
    public navParams: NavParams) {

    this.initValidationForm();
  }

  ionViewDidLoad() {
    this.step = "clientProfile";
  }

  initValidationForm() {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      suffix: [''],
      contact: ['', [Validators.required, Validators.pattern(/^\(([0-9]{3})\)[-]([0-9]{3})[-]([0-9]{4})$/)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      alternativeContact: ['', Validators.pattern(/^\(([0-9]{3})\)[-]([0-9]{3})[-]([0-9]{4})$/)],
      dateOfBirth: ['', Validators.required],
      ssn: ['', [Validators.required, Validators.pattern(/^[0-9]{3}-[0-9]{2}\-[0-9]{4}/)]]
    });

    this.addressInfoForm = this.formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}/)]],
      address: ['', Validators.required],
      faxNo: [''],
      service: ['', Validators.required],
      amount: ['', Validators.required]
    });

    this.paymentInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      suffix: [''],
      contact: ['', [Validators.required, Validators.pattern(/^\(([0-9]{3})\)[-]([0-9]{3})[-]([0-9]{4})$/)]],
      email: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: [''],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}/)]],
      address1: ['', Validators.required],
      address2: [''],
      paymentMode: ['', Validators.required],
      internalNote: ['']
    });
  }

  addLead() {
    this.cdr.detectChanges();
    let addLeadModel: AddLeadModel = new AddLeadModel();

    addLeadModel.user_id = this.localStorageProvider.getLoggedInUser().id;
    addLeadModel.firstname = this.personalInfoForm.value.firstName;
    addLeadModel.middlename = this.personalInfoForm.value.middleName;
    addLeadModel.lastname = this.personalInfoForm.value.lastName;
    addLeadModel.suffix = this.personalInfoForm.value.suffix;
    addLeadModel.contact = this.personalInfoForm.value.contact;
    addLeadModel.email = this.personalInfoForm.value.email;
    addLeadModel.gender = this.personalInfoForm.value.gender;
    addLeadModel.alt = this.personalInfoForm.value.alternativeContact;
    addLeadModel.dob = this.personalInfoForm.value.dateOfBirth;
    addLeadModel.ssn = this.personalInfoForm.value.ssn;
    addLeadModel.gender = this.personalInfoForm.value.gender;

    addLeadModel.country = this.addressInfoForm.value.country;
    addLeadModel.state = this.addressInfoForm.value.state;
    addLeadModel.city = this.addressInfoForm.value.city;
    addLeadModel.zip = this.addressInfoForm.value.zipCode;
    addLeadModel.address = this.addressInfoForm.value.address;
    addLeadModel.fax = this.addressInfoForm.value.faxNo;
    addLeadModel.service = this.addressInfoForm.value.service;
    addLeadModel.amount = this.addressInfoForm.value.amount;

    addLeadModel.f_name = this.paymentInfoForm.value.firstName;
    addLeadModel.m_name = this.paymentInfoForm.value.middleName;
    addLeadModel.l_name = this.paymentInfoForm.value.lastName;
    addLeadModel.suffixP = this.paymentInfoForm.value.suffix;
    addLeadModel.contactP = this.paymentInfoForm.value.contact;
    addLeadModel.emailP = this.paymentInfoForm.value.email;
    addLeadModel.countryP = this.paymentInfoForm.value.country;
    addLeadModel.stateP = this.paymentInfoForm.value.state;
    addLeadModel.cityP = this.paymentInfoForm.value.city;
    addLeadModel.zipP = this.paymentInfoForm.value.zipCode;
    addLeadModel.add1 = this.paymentInfoForm.value.address1;
    addLeadModel.add2 = this.paymentInfoForm.value.address2;
    addLeadModel.paymentMode = this.paymentInfoForm.value.paymentMode;
    addLeadModel.internal_notes = this.paymentInfoForm.value.internalNote;
    addLeadModel.mode = "create";

    this.leadProvider.createLeadByManager(addLeadModel).subscribe(response => {
      this.showLongToast((response as any)._body)
    })
  }


  showLongToast(response: any) {
    let toast = this.toastCtrl.create({
      message: response,
      duration: 2000,
    });
    toast.present();
  }

  switchTab(name: string) {
    switch (name) {
      case "address":
        this.step = "residentialAddress";
        break;
      case "paymentGeteway":
        this.step = "paymentGetewayDetail";
        break;
    }
  }

}
