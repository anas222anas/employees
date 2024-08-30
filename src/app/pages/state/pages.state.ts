import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetNotificationsAction } from './pages.actions';
import { get } from 'lodash';

export class PagesStateModel {
    public notifications!: any[];
}

const defaults = {
    notifications: []
};

@State<PagesStateModel>({
    name: 'pages',
    defaults
})
@Injectable()
export class PagessState {
    @Selector()
    static notifications(state: PagessState) {
        return get(state, 'notifications') || [];
    }
    @Action(SetNotificationsAction)
    add({ setState, getState }: StateContext<PagesStateModel>, { payload }: SetNotificationsAction) {
        const state = getState();
        setState({ notifications: [...state.notifications, payload] });
    }
}
