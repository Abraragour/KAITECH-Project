import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { LucideAngularModule, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslocoModule, LucideAngularModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  readonly PhoneIcon = Phone;
  readonly MailIcon = Mail;

  socialLinks = [
    { link: 'https://facebook.com/yourpage', icon: Facebook },
    { link: 'https://linkedin.com/company/yourcompany', icon: Linkedin },
    { link: 'https://twitter.com/yourprofile', icon: Twitter }
  ];

  currentYear: number = new Date().getFullYear();
}