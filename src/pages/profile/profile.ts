import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider, AuthenticationProvider, LoadingProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  profileForm: FormGroup;

  imageURL: string = '';
  base64Image:any;
  photos:any[] =[];
  loggedInUser: AppUser;
  edit: boolean = false;
  submitted: boolean = false;

  errorMessage: string = '';
  showFab: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider,
    public actionsheetCtrl: ActionSheetController,
    public loadingProvider: LoadingProvider,
    public platform: Platform,
    public camera: Camera
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }

  ngOnInit() {

    this.profileForm = this.formBuilder.group({
      userName: [this.loggedInUser.userName, Validators.required],
      suffix: [this.loggedInUser.suffix, Validators.required],
      firstName: [this.loggedInUser.firstName, Validators.required],
      middleName: [this.loggedInUser.middleName, Validators.required],
      lastName: [this.loggedInUser.lastName, Validators.required],
      email: [this.loggedInUser.email, [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      gender: [this.loggedInUser.gender, Validators.required],
      contactNumber: [this.loggedInUser.contactNumber, Validators.required],
      address: [this.loggedInUser.address, Validators.required],
      city: [this.loggedInUser.city, Validators.required],
      state: [this.loggedInUser.state, Validators.required],
      country: [this.loggedInUser.country, Validators.required],
      zip: [this.loggedInUser.zip, Validators.required],
      fax: [this.loggedInUser.fax]
      //photo: ['']
    });


    //this.disableProfileForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  // Custom Methods

  scrollStart(event) {
    this.showFab = false;
  }

  scrollStop(event) {
    this.showFab = true;
  }

  takePhoto() {
    let options = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 500,
      targetHeight: 500,
      quality: 100,
      allowEdit: true,
      correctOrientation: false,
      saveToPhotoAlbum: true,
      // mediaType: 0
    };
    this.camera.getPicture(options).then((imageData) => {
      this.imageURL = "data:image/jpeg;base64," + imageData;

      let cameraImageSelector = document.getElementById('camera-image');
      cameraImageSelector.setAttribute('src', this.imageURL);
    }, (err) => {
      console.log(err);
    });
  }

  openeditprofile() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.takePhoto();
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.openGallery();
          }
        },
      ]
    });
    actionSheet.present();
  }


  openGallery() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      let cameraImageSelector = document.getElementById('camera-image');
      cameraImageSelector.setAttribute('src', this.base64Image);
    }, (err) => {
      // Handle error
    })
  }

  reset() {
    this.submitted = false;
    this.profileForm.reset();
  }

  // enableProfileForm() {
  //   this.profileForm.controls.userName.disable();
  //   this.profileForm.controls.suffix.enable();
  //   this.profileForm.controls.firstName.enable();
  //   this.profileForm.controls.middleName.enable();
  //   this.profileForm.controls.lastName.enable();
  //   this.profileForm.controls.email.enable();
  //   this.profileForm.controls.gender.enable();
  //   this.profileForm.controls.contactNumber.enable();
  //   this.profileForm.controls.address.enable();
  //   this.profileForm.controls.city.enable();
  //   this.profileForm.controls.state.enable();
  //   this.profileForm.controls.zip.enable();
  //   this.profileForm.controls.fax.enable();
  // }

  // disableProfileForm() {
  //   this.profileForm.controls.userName.disable();
  //   this.profileForm.controls.suffix.disable();
  //   this.profileForm.controls.firstName.disable();
  //   this.profileForm.controls.middleName.disable();
  //   this.profileForm.controls.lastName.disable();
  //   this.profileForm.controls.email.disable();
  //   this.profileForm.controls.gender.disable();
  //   this.profileForm.controls.contactNumber.disable();
  //   this.profileForm.controls.address.disable();
  //   this.profileForm.controls.city.disable();
  //   this.profileForm.controls.state.disable();
  //   this.profileForm.controls.zip.disable();
  //   this.profileForm.controls.fax.disable();
  // }

  editProfile() {
    this.loadingProvider.showLoading();
    this.edit = true;
    //this.enableProfileForm();
    this.loadingProvider.hideLoading();
  }

  updateProfile() {
    this.loadingProvider.showLoading();
    this.errorMessage = '';
    this.submitted = true;

    if (this.profileForm.invalid) {
      this.loadingProvider.hideLoading();
      return;
    }

    this.loggedInUser.userName = this.profileForm.get('userName').value;
    this.loggedInUser.firstName = this.profileForm.get('firstName').value;

    this.edit = false;
    this.loadingProvider.hideLoading();
    return;

    // var result = this.userService
    //   .register(this.user)
    //   .subscribe(
    //     data => {
    //       // set success message and pass true paramater to persist the message after redirecting to the login page
    //       this.alertService.success('Registration successful', true);
    //       this.router.navigate(['/login']);
    //       this.reset();
    //     },
    //     error => {
    //       this.loading = false;
    //       let errorBody = JSON.parse(error['_body']);
    //       let modelState = errorBody['modelState'];

    //       for(let key in modelState) {
    //         this.errorMessage = modelState[key];
    //       }

    //       if(this.errorMessage != '') {
    //         alert(this.errorMessage);
    //       }
    //       else {
    //         alert("There is some problem in registraion, please try again or contact us.");
    //       }

    //       this.alertService.error(error._body);          
    //     }
    //   );
  }

}
