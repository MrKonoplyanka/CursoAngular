import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/shared/navbar/dragonball/character-list/character-list.component";
import type { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/shared/navbar/dragonball/character-add/character-add.component";


@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

  addCharacter(character: Character) {
    this.characters.update(currentCharacters => [...currentCharacters, character]);
  }
}
