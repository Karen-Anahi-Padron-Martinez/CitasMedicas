import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  days: string[] = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE'];
  
  times: { [key: string]: string[] } = {
    'LUN': ['9:00'],
    'MAR': [],
    'MIE': [],
    'JUE': ['16:00'],
    'VIE': ['13:00', '16:00']
  };
}





