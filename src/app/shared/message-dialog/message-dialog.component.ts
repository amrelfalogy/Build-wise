import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css'],
})
export class MessageDialogComponent {
  messageData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(
    private dialogRef: MatDialogRef<MessageDialogComponent>,
    private contactService: ContactService
  ) {}

  onSubmit() {
    if (
      !this.messageData.name ||
      !this.messageData.email ||
      !this.messageData.message
    )
      return;
    this.contactService.sendEmail(this.messageData).subscribe({
      next: (response) => {
        alert('Message sent successfully!');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error sending message:', error);
        alert('Failed to send the message. Please try again.');
      },
    });
  }
}
