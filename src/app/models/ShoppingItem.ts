export class ShoppingItem {
    id?: number | null; // '?' indica che l'ID è opzionale, poiché quando crei un nuovo articolo, l'ID verrà assegnato dal database
    item?: string;
    quantity?: number | null;
  }
  