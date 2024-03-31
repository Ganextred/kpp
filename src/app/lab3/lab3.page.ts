import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page {
  data: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/6609b7b9acd3cb34a8312517';
  loading: any;
  searchDepartment: string = '';

  constructor(public loadingController: LoadingController) {}

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });
    await this.loading.present();
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.data = []
        for (let entry of json.record.data){
          this.data.push(entry)
        }
        this.loading.dismiss();
      });
  }

  getHighlightedColor(department: string): string {
    return department === this.searchDepartment ? 'green' : '';
  }

  toggleDetails(index: number) {
    this.showDetails[index] = !this.showDetails[index];
  }
}
