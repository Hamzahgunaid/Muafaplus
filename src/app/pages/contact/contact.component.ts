import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  whatsappLink = 'https://wa.me/967782705557';
  platformLink = 'https://Muafa.app';

  formData = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    const text = encodeURIComponent(
      `مرحباً، أنا ${this.formData.name} من ${this.formData.organization}.\n` +
      `البريد: ${this.formData.email}\n` +
      `الهاتف: ${this.formData.phone}\n` +
      `الرسالة: ${this.formData.message}`
    );
    window.open(`https://wa.me/967782705557?text=${text}`, '_blank');
    this.submitted = true;
  }
}
