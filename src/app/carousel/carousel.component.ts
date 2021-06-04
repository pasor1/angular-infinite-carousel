import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  cards = [
    {
      image: 'https://picsum.photos/seed/1/200/100',
      type: 'video',
      duration: 76,
      title: 'Welcome to effective time management',
      cardinality: 'single',
    },
    {
      image: 'https://picsum.photos/seed/2/200/100',
      type: 'elearning',
      duration: 2520,
      title: 'Choosing the best audio player software for your computer',
      cardinality: 'single',
    },
    {
      image: 'https://picsum.photos/seed/3/200/100',
      type: 'learning_plan',
      duration: 4800,
      title: 'The small change that creates massive results in your life',
      cardinality: 'collection',
    },
    {
      image: 'https://picsum.photos/seed/4/200/100',
      type: 'playlist',
      duration: 4800,
      title: 'Enhence your brand potential with giant advertising blimps',
      cardinality: 'collection',
    },
    {
      image: 'https://picsum.photos/seed/5/200/100',
      type: 'elearning',
      duration: 3600,
      title: 'How to get write better advertising copy...',
      cardinality: 'single',
    },
    {
      image: 'https://picsum.photos/seed/6/200/100',
      type: 'elearning',
      duration: 3600,
      title: 'title',
      cardinality: 'single',
    },
    {
      image: 'https://picsum.photos/seed/1/200/100',
      type: 'video',
      duration: 76,
      title: 'Welcome to effective time management',
      cardinality: 'single',
    },
    {
      image: 'https://picsum.photos/seed/2/200/100',
      type: 'elearning',
      duration: 2520,
      title: 'Choosing the best audio player software for your computer',
      cardinality: 'single',
    }
  ];
  icon = 'tungsten';
  title = 'Fresh and just uploaded content';
  subtitle = 'Lorem ipsum sit amet, adipiscing elit. Cras dapibus vulputate diam eu pretium.';
  isLeftControlVisible = false;
  isRightControlVisible = false;
  scrollPosition = 0;
  scrollStepDistance = 220;
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('scrollInner') scrollInner: ElementRef;

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
      this.cards = [...this.cards, ...this.cards];
      // this.isRightControlVisible = false;
    }
    if (!this.isEndPosition(this.scrollPosition)) {
      this.scrollPosition = nextPosition;
    }
  }
}
