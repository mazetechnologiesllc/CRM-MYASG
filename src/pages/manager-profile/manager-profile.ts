import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

// Models
import { AppUser } from '../../_models';

// Services
import { LocalStorageProvider, AuthenticationProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-manager-profile',
  templateUrl: 'manager-profile.html',
})
export class ManagerProfilePage implements OnInit {

  imageURL: string = '';

  loggedInUser: AppUser;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthenticationProvider,
    public localStorageProvider: LocalStorageProvider,
    public camera: Camera
  ) {
    this.loggedInUser = this.localStorageProvider.getLoggedInUser();
  }
  
  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerProfilePage');
  }

  // Custom Methods

  updateProfile() {
    return;
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

}
