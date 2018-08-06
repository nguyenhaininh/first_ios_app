/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
export interface IAppState {
  informations?: IAppInformation[];
  isShowingMenu: boolean;
  mode: AppMode;
  tab: AppTab;
}

export enum AppMode {
  Init,
  Login,
  Member,
}

export enum AppTab {
  Feed,
  Ranking,
  Favorite,
  Download,
  Search
}

export interface IAppInformation {
  infoId: string;
  subject: string;
  description: string;
  date: string;
  important?: boolean;
}

export function createInitialAppState(): IAppState {
  return {
    isShowingMenu: false,
    mode: AppMode.Init,
    tab: AppTab.Feed,
  };
}
