import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  data: any;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  getVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}