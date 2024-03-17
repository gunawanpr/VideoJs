import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoApp';

  items: MenuItem[] | undefined;

  ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
            },
        ];
    }
}
