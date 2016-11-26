import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthData {
  fireAuth: any;

  constructor(public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) { this.fireAuth = user.auth; }
    });
  }

  loginUser(newEmail: string, newPassword: string): any {
    return this.af.auth.login({ email: newEmail, password: newPassword });
  }

  resetPassword(email: string): any {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): any {
    return this.af.auth.logout();
  }

  signupUser(newEmail: string, newPassword: string): any {
    return this.af.auth.createUser({ email: newEmail, password: newPassword })
    .then(newUser => {
      firebase.database().ref('/userProfile').child(newUser.uid)
      .set({email:newEmail});
    })
  }

}
