import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lupa',
  templateUrl: './lupa.component.html',
  styleUrls: ['./lupa.component.css']
})
export class LupaComponent implements OnInit {
  title = 'app';

  constructor() { }

  ngOnInit() {
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.4/TweenMax.min.js');
    this.loadScript('../assets/js/lupa.js');
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
