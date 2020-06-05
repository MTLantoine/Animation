import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: {
    "(window:resize)": "onResize($event)",
  },
})
export class AppComponent implements OnInit {
  windowHeight: number;

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }
}
