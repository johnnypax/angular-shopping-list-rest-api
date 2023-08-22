import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingItem } from 'src/app/models/ShoppingItem';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  newItem: ShoppingItem = {
    id: null, // il backend assegnerà un ID, quindi potremmo lasciarlo non definito qui
    item: '',
    quantity: null
  };

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router  // Inietta il servizio Router
  ) {}
  onSubmit(): void {
    this.shoppingListService.addItem(this.newItem).subscribe(response => {
      console.log(response.data);
      alert('Articolo aggiunto con successo!');
      this.router.navigate(['/shopping-list']);  // Naviga verso la lista degli item
    }, error => {
      console.error('Errore nell\'aggiunta dell\'articolo:', error);
      alert('Si è verificato un errore durante l\'aggiunta dell\'articolo.');
    });
  }
}