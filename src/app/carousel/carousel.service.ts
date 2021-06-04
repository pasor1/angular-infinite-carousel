import {Injectable} from '@angular/core';
import {Card} from '../shared/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  cards = [
    {
      image: 'https://picsum.photos/seed/1/200/100',
      type: 'video',
      duration: 76,
      title: 'Welcome to effective time management',
    },
    {
      image: 'https://picsum.photos/seed/2/200/100',
      type: 'elearning',
      duration: 2520,
      title: 'Choosing the best audio player software for your computer',
    },
    {
      image: 'https://picsum.photos/seed/3/200/100',
      type: 'learning_plan',
      duration: 4800,
      title: 'The small change that creates massive results in your life',
    },
    {
      image: 'https://picsum.photos/seed/4/200/100',
      type: 'playlist',
      duration: 4800,
      title: 'Enhence your brand potential with giant advertising blimps',
    },
    {
      image: 'https://picsum.photos/seed/5/200/100',
      type: 'elearning',
      duration: 3600,
      title: 'How to get write better advertising copy...',
    },
    {
      image: 'https://picsum.photos/seed/6/200/100',
      type: 'elearning',
      duration: 3600,
      title: 'title',
    },
    {
      image: 'https://picsum.photos/seed/1/200/100',
      type: 'video',
      duration: 76,
      title: 'Welcome to effective time management',
    },
    {
      image: 'https://picsum.photos/seed/2/200/100',
      type: 'elearning',
      duration: 2520,
      title: 'Choosing the best audio player software for your computer',
    }
  ];

  getCards(): Promise<Card[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.cards);
      }, 1500);
    });
  }

}
