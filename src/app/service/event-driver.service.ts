import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from 'src/state/product.state';

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  sourceEventSubject:Subject<ActionEvent> =new Subject<ActionEvent>();
  sourceEventSubjectObsevable =this.sourceEventSubject.asObservable(); 

  constructor() { }

  publishEvent(event:ActionEvent){
   this.sourceEventSubject.next(event);
  }
}
