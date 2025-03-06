import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  
  constructor(private http: HttpClient) { }
  
  login() {
    // This will connect to our vulnerable backend
    this.http.post('http://localhost:3000/api/login', { username: this.username, password: this.password })
      .subscribe({
        next: (response: any) => {
          if (response.success) {
            this.message = 'Login successful!';
          } else {
            this.message = 'Invalid username or password';
          }
        },
        error: (error) => {
          this.message = 'An error occurred while trying to login';
          console.error('Login error:', error);
        }
      });
  }
}