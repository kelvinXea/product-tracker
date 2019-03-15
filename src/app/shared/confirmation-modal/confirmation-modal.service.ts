import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { ConfirmationModalComponent } from "./confirmation-modal.component";

@Injectable({
  providedIn: "root"
})
export class ConfirmationModalService {
  constructor(private modalService: NgbModal) {}

  callConfirmation(title: string, message: string): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.title = title;
    return modalRef.result;
  }
}
