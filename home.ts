import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  NgModule,
  ViewEncapsulation,
} from "@angular/core";

interface archiveList {
  sno: number;
  questionName: string;
  sentTo: string;
  sentOn: any;
  dueDate: any;
  status: string;
  actions: any;
}
@Component({
  selector: "app-archieve-questionaies",
  templateUrl: "./archieve-questionaies.component.html",
  styleUrls: ["./archieve-questionaies.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ArchieveQuestionaiesComponent implements OnInit {
  val1: number = 33;
  @Output() click = new EventEmitter<string>();

  public archiveListData: archiveList[] = [
    {
      sno: 1,
      questionName: "Vendor Product Security - 2022",
      sentTo: "TechMahindra",
      sentOn: "22/4/22",
      dueDate: "22/5/22",
      status: "Active",
      actions: "",
    },
    {
      sno: 2,
      questionName: "Vendor Security - 2022",
      sentTo: "Dev2prod",
      sentOn: "22/4/22",
      dueDate: "22/5/22",
      status: "Active",
      actions: "",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getPagniationBoolean(arg) {
    return arg?.length > 8 ? true : false;
  }
  backToMainTemplate() {
    this.click.emit("MainTemplate");
  }
}
