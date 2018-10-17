import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '新宿' },
      { id: 12, name: '代々木' },
      { id: 13, name: '原宿' },
      { id: 14, name: '渋谷' },
      { id: 15, name: '恵比寿' },
      { id: 16, name: '目黒' },
      { id: 17, name: '五反田' },
      { id: 18, name: '大崎' },
      { id: 19, name: '品川' },
      { id: 20, name: '田町' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
