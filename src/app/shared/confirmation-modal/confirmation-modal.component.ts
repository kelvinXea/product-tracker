import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-confirmation-modal",
  templateUrl: "./confirmation-modal.component.html",
  styleUrls: ["./confirmation-modal.component.css"]
})
export class ConfirmationModalComponent implements OnInit {
  @Input() message: string;
  @Input() title: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {}

  accept() {
    this.activeModal.close(true);
  }

  cancel() {
    this.activeModal.close(false);
  }
}
