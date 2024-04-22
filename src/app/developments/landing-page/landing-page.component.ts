import {Component, OnInit} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  swiper!: Swiper; // Reference to the Swiper instance

  ngOnInit(): void {
    this.initializeSwiper();
  }

  // Initialize Swiper when the component initializes
  initializeSwiper() {
    this.swiper = new Swiper('.mySwiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 3500,
      },
    });
  }

  // Function to navigate to the previous slide
  prevSlide() {
    this.swiper.slidePrev();
  }

  // Function to navigate to the next slide
  nextSlide() {
    this.swiper.slideNext();
  }
}
