import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingItem } from 'src/app/models/ShoppingItem';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: ShoppingItem = {
    id: null,
    item: "",
    quantity: 0
  };

  constructor(
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idValue = this.route.snapshot.paramMap.get('id');
    const id = idValue ? +idValue : 0;  

    this.shoppingListService.getItemById(id).subscribe(data => {
      this.item = data.data;
    }, error => {
      console.error("Oggetto non propriamente inizializzato");
      this.router.navigate(['/shopping-list']);  // Naviga verso la lista degli item
    });
  }

  onSubmit(): void {
    if(this.item == null){
      console.error("Oggetto non propriamente inizializzato");
      this.router.navigate(['/shopping-list']);  // Naviga verso la lista degli item
    }
    else
      this.shoppingListService.updateItem(this.item).subscribe(response => {
        alert('Articolo modificato con successo!');
        this.router.navigate(['/shopping-list']);
      }, error => {
        console.error("Errore durante la modifica dell'articolo:", error);
      });
  }
}
