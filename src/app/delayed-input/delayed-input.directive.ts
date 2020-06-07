import {Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {debounce, distinctUntilChanged, takeWhile} from 'rxjs/operators';

@Directive({
  selector: '[appDelayedInput]'
})
export class DelayedInputDirective implements OnInit, OnDestroy {

    private userInput$ = new Subject<InputEvent>(); // 0️⃣
    private alive = true; // 1️⃣

    @Input() dueTime = 500; // 2️⃣
    @Output() delayedInput = new EventEmitter<InputEvent>(); // 3️⃣

    constructor() { }

    ngOnInit() {
        this.userInput$ // 5️⃣
            .pipe(
                debounce(() => timer(this.dueTime)), // 6️⃣
                distinctUntilChanged(), // 7️⃣
                takeWhile(() => this.alive),
            )
            .subscribe(e => this.delayedInput.emit(e)); // 8️⃣
    }

    @HostListener('input', ['$event']) // 4️⃣
    inputEvent(event: InputEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.userInput$.next(event);
    }

    ngOnDestroy() {
        this.alive = false; // 9️⃣
    }

}
