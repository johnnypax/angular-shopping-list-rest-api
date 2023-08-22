import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  items: any[] = [];

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.shoppingListService.getAllItems().subscribe(data => {
      this.items = data.data;
      console.log("RELOADED")
    }, error => {
      console.error("Errore nel caricamento degli articoli:", error);
    });
  }

  editItem(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteItem(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questo articolo?')) {
      this.shoppingListService.deleteItem(id).subscribe(response => {
        if (response.status === 'OK') {
          this.loadItems();
        }
      }, error => {
        console.error("Errore nell'eliminazione dell'articolo:", error);
      });
    }
  }

  addItem(): void {
    this.router.navigate(['/add']);
  }
}