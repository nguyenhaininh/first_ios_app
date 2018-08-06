/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { MemoryHistory, createMemoryHistory } from 'history';

export interface IAppNavContext {
  histories: {
    login: MemoryHistory;
    member: {
      feed: MemoryHistory;
      ranking: MemoryHistory;
      favorite: MemoryHistory;
      download: MemoryHistory;
      search: MemoryHistory;
      menu: MemoryHistory;
    }
  };
}

export function createInitialContextValue(): IAppNavContext {
  const login = createMemoryHistory({ initialEntries: ['/login'] });
  const feed = createMemoryHistory({ initialEntries: ['/member'] });
  const ranking = createMemoryHistory({ initialEntries: ['/member/ranking'] });
  const favorite = createMemoryHistory({ initialEntries: ['/member/favorite'] });
  const download = createMemoryHistory({ initialEntries: ['/member/download'] });
  const search = createMemoryHistory({ initialEntries: ['/member/search'] });
  const menu = createMemoryHistory({ initialEntries: ['/modal/menu'] });
  return {
    histories: {
      login,
      member: { feed, ranking, favorite, download, search, menu}
    },
  };
}

const AppNavContext = React.createContext<IAppNavContext>(createInitialContextValue());
export default AppNavContext;
