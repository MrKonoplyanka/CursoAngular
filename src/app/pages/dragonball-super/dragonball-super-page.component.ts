import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/shared/navbar/dragonball/character-list/character-list.component";
import type { Character } from '../../interfaces/character.interface';


@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterListComponent]
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

addCharacter() {
  let character: Character = {
    id: 7,
    name: this.name(),
    power: this.power(),
  }

  this.characters.update((current) => [...current, character]);
  this.resetFields();

}
powerClasses = computed(() => {
  return {
      'text-danger': true,
  };
});

resetFields(){
  this.name.set('');
  this.power.set(0);
}

}
