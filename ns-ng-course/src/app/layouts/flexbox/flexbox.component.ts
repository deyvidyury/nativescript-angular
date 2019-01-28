import { Component, OnInit } from "@angular/core";

var orientation = require("nativescript-orientation");

@Component({
  selector: "ns-flexbox",
  templateUrl: "./flexbox.component.html",
  styleUrls: ["./flexbox.component.css"],
  moduleId: module.id
})
export class FlexboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    orientation.setOrientation("landscape");
  }
}
