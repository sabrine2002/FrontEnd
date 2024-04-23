import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {

  fileToUpload: File | undefined;
  verificationResult: string = '';

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  verifyContract() {
    if (!this.fileToUpload) {
      console.error('Please select a file.');
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload);

    this.http.post<string>('http://localhost:8076/api/test/verify-file', formData)
      .subscribe(
        (        result: string) => {
          this.verificationResult = result;
        },
        (        error: any) => {
          console.error('An error occurred during contract verification:', error);
          this.verificationResult = 'An error occurred during contract verification.';
        }
      );
  }


}
