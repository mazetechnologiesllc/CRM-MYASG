import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AppUser } from '../../_models/index';

@Injectable()
export class LocalStorageProvider {

  constructor(
    public storage: Storage
  ) { }

  // logged in User
  setLoggedInUser(user: AppUser) {
    localStorage.setItem('loggedInUser', JSON.stringify({
      id: user.id,
      adminId: user.adminId,
      affiliateId: user.affiliateId,
      companyId: user.companyId,
      companyName: user.companyName,
      companyDisc: user.companyDisc,
      empId: user.empId,
      managerId: user.managerId,
      salesId: user.salesId,
      serviceId: user.serviceId,
      userName: user.userName,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      suffix: user.suffix,
      title: user.title,
      dob: user.dob,
      userTypeId: user.userTypeId,
      gender: user.gender,
      website: user.website,
      email: user.email,
      password: user.password,
      contactNumber: user.contactNumber,
      alternateNumber: user.alternateNumber,
      fax: user.fax,
      address: user.address,
      city: user.city,
      state: user.state,
      country: user.country,
      pinCode: user.pinCode,
      zip: user.zip,
      logo: user.logo,
      icon: user.icon,
      image: user.image,
      securityAmount: user.securityAmount,
      amount: user.amount,
      finalAmount: user.finalAmount,
      under: user.under,
      profile: user.profile,
      designationId: user.designationId,
      leadAssigned: user.leadAssigned,
      leadStatus: user.leadStatus,
      isApproved: user.isApproved,
      createdDate: user.createdDate,
      updatedDate: user.updatedDate,
      createdBy: user.createdBy,
      updateBy: user.updateBy,
      lastLogin: user.lastLogin,
      isAgreedCCQ: user.isAgreedCCQ,
      status: user.status
    }));

    //this.storage.set('loggedInUser', JSON.stringify({user}));
  }

  getLoggedInUser(): AppUser {

    let loggedInUser: AppUser;
    
    // this.storage.get('loggedInUser').then((user) => {
    //   console.log('Your age is', user);
    //   loggedInUser = user;
    // });

    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    return loggedInUser;
  }

  removeLoggedInUser() {

    //this.storage.remove('loggedInUser');

    localStorage.removeItem('loggedInUser');
  }

}
