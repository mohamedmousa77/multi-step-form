import { Component } from '@angular/core';

@Component({
  selector: 'app-step5-confirming-registration',
  imports: [],
  templateUrl: './step5-confirming-registration.component.html',
  styleUrl: './step5-confirming-registration.component.css'
})
export class Step5ConfirmingRegistrationComponent {
  title = 'Thank you!';
  desc = 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.';
  thankYouImage = 'assets/images/icon-thank-you.svg';
}
