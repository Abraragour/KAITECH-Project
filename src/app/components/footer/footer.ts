import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { LucideAngularModule, Mail, MapPin, Phone, Facebook, Linkedin, Youtube } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslocoModule, LucideAngularModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly PhoneIcon = Phone;

  // ضفنا name لكل أوبجكت عشان الـ HTML يعرف يفرق بين الواتساب والباقي
  socialLinks = [
    { name: 'facebook', link: 'https://www.facebook.com/KAITECH1/', icon: Facebook },
    { name: 'linkedin', link: 'https://www.linkedin.com/company/kaitech-engineering/', icon: Linkedin },
    { name: 'youtube', link: 'https://www.youtube.com/channel/UCgZ_0iDj7ALKSXVuL_JObZA/featured', icon: Youtube },
    { name: 'whatsapp', link: 'https://wa.me/+201065587728', icon: null } 
  ];

  currentYear: number = new Date().getFullYear();
}