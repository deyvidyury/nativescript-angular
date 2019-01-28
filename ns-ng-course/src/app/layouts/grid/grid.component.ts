import { Component, OnInit } from "@angular/core";

var orientation = require("nativescript-orientation");

@Component({
  selector: "ns-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"],
  moduleId: module.id
})
export class GridComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    orientation.setOrientation("landscape");
  }
}
