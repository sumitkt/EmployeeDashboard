import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-EmpDash',
  templateUrl: './EmpDash.component.html',
  styleUrls: ['./EmpDash.component.css']
})
export class EmpDashComponent implements OnInit {
  closeResult!: string;

  modalOptions!:NgbModalOptions;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content: any) {

    this.modalService.open(content, this.modalOptions).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }



  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return  `with: ${reason}`;

    }

  }

}
