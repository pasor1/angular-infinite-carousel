import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {CarouselService} from './carousel.service';
import {Card} from '../shared/card.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  cards: Card[] = [];
  icon = 'tungsten';
  title = 'Fresh and just uploaded content';
  subtitle = 'Lorem ipsum sit amet, adipiscing elit. Cras dapibus vulputate diam eu pretium.';
  isLeftControlVisible = false;
  isRightControlVisible = false;
  scrollPosition = 0;
  scrollStepDistance = 220;
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('scrollInner') scrollInner: ElementRef;

  constructor(private carouselService: CarouselService) {
  }

  ngOnInit(): void {
    this.carouselService.getCardsObservable.subscribe((params) => {
      this.cards.push(...params);
    });
  }

  isStartPosition(position): boolean {
    return position >= 0;
  }

  isEndPosition(position): boolean {
    const rightOffset = position + this.scrollInner.nativeElement.offsetWidth - this.scrollContainer.nativeElement.offsetWidth;
    return rightOffset <= 0;
  }

  showControls(): void {
    if (!this.isStartPosition(this.scrollPosition)) {
      this.isLeftControlVisible = true;
    }
    if (!this.isEndPosition(this.scrollPosition)) {
      this.isRightControlVisible = true;
    }
  }

  hideControls(): void {
    this.isLeftControlVisible = false;
    this.isRightControlVisible = false;
  }

  scrollLeft(): void {
    const nextPosition = this.scrollPosition + this.scrollStepDistance;
    if (this.isStartPosition(nextPosition)) {
      this.isLeftControlVisible = false;
    }
    if (!this.isEndPosition(nextPosition)) {
      this.isRightControlVisible = true;
    }
    if (!this.isStartPosition(this.scrollPosition)) {
      this.scrollPosition = nextPosition;
    }
  }

  scrollRight(): void {
    const nextPosition = this.scrollPosition - this.scrollStepDistance;
    if (!this.isStartPosition(nextPosition)) {
      this.isLeftControlVisible = true;
    }
    if (this.isEndPosition(nextPosition)) {
      this.carouselService.getCardsObservable.subscribe((params) => {
        this.cards.push(...params);
      });
    }
    if (!this.isEndPosition(this.scrollPosition)) {
      this.scrollPosition = nextPosition;
    }
  }
}
