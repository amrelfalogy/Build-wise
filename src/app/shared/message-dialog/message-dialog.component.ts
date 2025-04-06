import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactService } from 'src/app/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  loading = false;

  constructor(
    private dialogRef: MatDialogRef<MessageDialogComponent>,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.isFormInvalid()) {
      this.showSnackbar('Please fill in all required fields.', 'snackbar-error');
      return;
    }

    this.loading = true;
    this.sendMessage();
  }

  private isFormInvalid(): boolean {
    return !this.messageData.name || !this.messageData.email || !this.messageData.message;
  }

  private sendMessage(): void {
    this.contactService.sendEmail(this.messageData).subscribe({
      next: () => {
        this.showSnackbar('Message sent successfully!', 'snackbar-success');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.showSnackbar('Failed to send the message. Please try again.', 'snackbar-error');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  private showSnackbar(message: string, panelClass: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [panelClass],
    });
  }
}