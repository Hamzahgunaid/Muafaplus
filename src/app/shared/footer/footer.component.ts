import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  whatsappLink = 'https://wa.me/967782705557';
  platformLink = 'https://Muafa.app';
  facebookLink = 'https://www.facebook.com/profile.php?id=61582802361994';
}
