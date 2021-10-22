import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/service/event-driver.service';
import { ActionEvent } from 'src/state/product.state';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  counter:number=0;
  constructor(private eventDriven:EventDriverService) { }

  ngOnInit(): void {
    this.eventDriven.sourceEventSubjectObsevable.subscribe((actionEvent:ActionEvent)=>{
      ++this.counter;
    })
  }

}
