import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public yells: any = [];
  public newYellContent: string;

  constructor(private message: MessageService) { }

  ngOnInit() {
    this.fetchYells();
  }

  private fetchYells(): void {
    this.message.fetchAllYells().subscribe((data) => {
      this.yells = data;
    }, error => {
      console.log(error);
    });
  }

  public newYell(): void {
    if(!this.newYellContent || this.newYellContent.length <= 0) {
      console.log("Yell does not contain anything.");
      return;
    }

    this.message.yell(this.newYellContent).subscribe((data) => {

    }, error => {
      console.log(error);
    }, () => {
      this.fetchYells();
      this.newYellContent = null;
    })
  }

}
