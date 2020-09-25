import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/product.model';
import { Event } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css'],
})
export class StockHomeComponent implements OnInit {
  displayedColumns = ['image', 'name', 'price', 'stock', 'action'];
  dataSource = new MatTableDataSource<Product>();
  textSearch: string;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.feedData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  feedData() {
    const dummy: Product[] = [
      {
        name: 'repudiandae suscipit est.Omnis vel optio',
        stock: 1,
        price: 42900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 279,
        price: 42900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 321,
        price: 422900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 423,
        price: 429550,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 555,
        price: 429070,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'repudiandae suscipit est.Omnis vel optio',
        stock: 1,
        price: 42900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 279,
        price: 42900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 321,
        price: 422900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 423,
        price: 429550,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 555,
        price: 429070,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'repudiandae suscipit est.Omnis vel optio',
        stock: 1,
        price: 42900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 279,
        price: 42900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 321,
        price: 422900,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 423,
        price: 429550,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
      {
        name: 'Macbook pro',
        stock: 555,
        price: 429070,
        image:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_TH?wid=892&hei=820&&qlt=80&.v=1587460269141',
      },
    ];
    this.dataSource.data = dummy;
  }
  search(event: KeyboardEvent) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null);
  }
}
