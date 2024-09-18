import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mainObj: any = {};
  constructor() {}

  ngOnInit(): void {}

  myOTP: any;
  ngAfterViewInit() {
    if ('OTPCredential' in window) {
      this.mainObj.isWebOtpSupported = true;

      const ac = new AbortController();
      debugger;

      var reqObj = {
        otp: { transport: ['sms'] },
        signal: ac.signal,
      };
      navigator.credentials
        .get(reqObj)
        .then((otp: any) => {
          debugger;
          console.log(otp, 'OTP');
          if (otp) {
            if (otp && otp.code) {
              this.myOTP = otp.code;
            }
          }
        })
        .catch((err) => {
          debugger;
          console.log(err);
        });
    } else {
      debugger;
      console.log("Error,No web API")
      this.mainObj.isWebOtpSupported = false;
    }
  }
}
