/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { appReducer } from '../../stores/app-reducer';
import { createLocation } from 'history';
import { createInitialAppState, IAppInformation, AppMode, AppTab } from '../app-state';

describe('app-reducer', () => {
  it('fetchInformations', () => {
    const result = appReducer({
      isShowingMenu: false,
      mode: AppMode.Init,
      tab: AppTab.Download,
    }, {
        type: 'FETCH_APP_INFORMATIONS',
        payload: [
          { infoId: '123', subject: 'Subject', description: 'Description', date: '2018-07-26', important: true, }
        ] as IAppInformation[]
      });
    expect(result).toEqual({
      isShowingMenu: false,
      informations: [
        { infoId: '123', subject: 'Subject', description: 'Description', date: '2018-07-26', important: true, }
      ],
      mode: AppMode.Init,
      tab: AppTab.Download,
    });
  });
  it('setMode', () => {
    const result = appReducer({
      isShowingMenu: false,
      mode: AppMode.Init,
      tab: AppTab.Download,
    }, {
        type: 'APP_SET_MODE',
        payload: AppMode.Member,
      });
    expect(result).toEqual({
      isShowingMenu: false,
      mode: AppMode.Member,
      tab: AppTab.Download,
    });
  });
  it('setTab', () => {
    const result = appReducer({
      isShowingMenu: false,
      mode: AppMode.Init,
      tab: AppTab.Feed,
    }, {
        type: 'APP_SET_TAB',
        payload: AppTab.Ranking,
      });
    expect(result).toEqual({
      isShowingMenu: false,
      mode: AppMode.Init,
      tab: AppTab.Ranking,
    });
  });
});
