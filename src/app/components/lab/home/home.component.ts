import { Component, OnInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }
  menuState: string = 'out';
  badgecount = 20;

  onLogoutClick(): boolean {
    
    this.onNavigate();
    return false;
  }

  newsid;
  onNavigate(): void {
    this.collaspseNav();
  }
  collaspseNav(): void {
    let butt = this.el.nativeElement.querySelector(".navbar-toggle");
    let isCollapsed = this.hasClass(butt, "collapsed");
    if (isCollapsed == false) {
      butt.click();
    }
  }
  hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
  fromchild(event) {
    console.log("event", event)
    this.menuState = 'out' ? 'in' : 'out';
  }

}
