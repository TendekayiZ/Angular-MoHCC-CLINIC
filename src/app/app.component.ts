import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
   /* 
    '../../src/assets/css/bootstrap.min.css',
    '../../src/assets/css/animate.min.css',
    '../../src/assets/css/icofont.min.css',
    '../../src/assets/css/magnific-popup.min.css',
    '../../src/assets/css/meanmenu.css',
    '../../src/assets/css/odometer.min.css',
    '../../src/assets/css/owl.carousel.min.css',
    '../../src/assets/css/owl.theme.default.min.css',
    '../../src/assets/css/responsive.css',
    '../../src/assets/css/slick-theme.min.css',
    '../../src/assets/css/slick.min.css',
    '../../src/assets/css/theme-dark.css',*/
  ]
})
export class AppComponent {
  title = 'MoHCC-Latest';
}
