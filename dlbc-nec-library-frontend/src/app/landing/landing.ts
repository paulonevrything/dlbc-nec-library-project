import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-landing',
  imports: [MatButtonModule, MatCardModule, MatToolbarModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  onSignUp() {
    alert('Sign Up clicked!');
  }

  onSignIn() {
    alert('Sign In clicked!');
  }
}
