import {Injector} from '@angular/core';

export class AppInjector {
    private static mainInjector: Injector;

    static set injector(value: Injector) {
        this.mainInjector = value;
    }

    static get injector(): Injector {
        return this.mainInjector;
    }
}
