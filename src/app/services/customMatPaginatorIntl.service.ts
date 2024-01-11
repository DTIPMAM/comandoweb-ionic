import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomMatPaginatorIntlService extends MatPaginatorIntl{

  constructor() { 
    super();
    this.getAndInitTranslations();
  }

  private getAndInitTranslations(): void {
    this.itemsPerPageLabel = "Itens por página";
    this.nextPageLabel = "Próxima página";
    this.previousPageLabel = "Página anterior";
    this.firstPageLabel = "Primeira página";
    this.lastPageLabel = "Última página";
  }

  // necessário para substituir "of" para "de" | 10-20 of 1200 -> 10-20 de 1200
  override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }
}
