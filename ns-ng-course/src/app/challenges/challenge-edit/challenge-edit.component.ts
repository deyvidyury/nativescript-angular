import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ns-challenge-edit",
  templateUrl: "./challenge-edit.component.html",
  styleUrls: ["./challenge-edit.component.css"],
  moduleId: module.id
})
export class ChallengeEdirComponent {
  @Output() input = new EventEmitter();
  challengeDescription = "";

  onSetChallenge() {
    this.input.emit(this.challengeDescription);
  }
}
