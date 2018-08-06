/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Lunascape Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
import { createTypeAction, createTypeAsyncAction } from '../common/utility/redux';
import { IAppInformation, AppTab, AppMode } from '../stores/app-state';

export const initAppAction = createTypeAsyncAction('INIT_APP', () => {
  // Stub
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
});

export const fetchInfomartionsAction = createTypeAsyncAction('FETCH_APP_INFORMATIONS', () => {
  return new Promise<IAppInformation[]>((r) => {
    setTimeout(() => {
      r([{
        infoId: '1',
        subject: 'T-MAGAZINEを装った不審なメールにご注意ください',
        description: 'デザインのいい仕事場。 WORK IS FUN! 仕事、はかどってますか？ いいアイデアが出ないのは、 ワーキングスペースのデザインが悪いからかもしれません。 アメリカ西海岸の先進的な企業から日本のスマートな会社まで、 いい仕事をするための最…のオフィス環境を取材。 働く場所も自由に選べるこれからの時代に、 それでも集まりたくなる未来の仕事場のカタチを紹介します。',
        date: '2018年7月12日',
        important: true,
      },
      {
        infoId: '2',
        subject: '6月配信予定雑誌のお知らせ',
        description: 'デザインのいい仕事場。 WORK IS FUN! 仕事、はかどってますか？ いいアイデアが出ないのは、 ワーキングスペースのデザインが悪いからかもしれません。 アメリカ西海岸の先進的な企業から日本のスマートな会社まで、 いい仕事をするための最…のオフィス環境を取材。 働く場所も自由に選べるこれからの時代に、 それでも集まりたくなる未来の仕事場のカタチを紹介します。',
        date: '2018年7月12日',
      },
      {
        infoId: '3',
        subject: 'お知らせタイトル',
        description: 'デザインのいい仕事場。 WORK IS FUN! 仕事、はかどってますか？ いいアイデアが出ないのは、 ワーキングスペースのデザインが悪いからかもしれません。 アメリカ西海岸の先進的な企業から日本のスマートな会社まで、 いい仕事をするための最…のオフィス環境を取材。 働く場所も自由に選べるこれからの時代に、 それでも集まりたくなる未来の仕事場のカタチを紹介します。',
        date: '2018年7月12日',
      },
      {
        infoId: '4',
        subject: 'お知らせタイトル',
        description: 'デザインのいい仕事場。 WORK IS FUN! 仕事、はかどってますか？ いいアイデアが出ないのは、 ワーキングスペースのデザインが悪いからかもしれません。 アメリカ西海岸の先進的な企業から日本のスマートな会社まで、 いい仕事をするための最…のオフィス環境を取材。 働く場所も自由に選べるこれからの時代に、 それでも集まりたくなる未来の仕事場のカタチを紹介します。',
        date: '2018年7月12日',
      },
      {
        infoId: '5',
        subject: 'お知らせタイトル',
        description: 'デザインのいい仕事場。 WORK IS FUN! 仕事、はかどってますか？ いいアイデアが出ないのは、 ワーキングスペースのデザインが悪いからかもしれません。 アメリカ西海岸の先進的な企業から日本のスマートな会社まで、 いい仕事をするための最…のオフィス環境を取材。 働く場所も自由に選べるこれからの時代に、 それでも集まりたくなる未来の仕事場のカタチを紹介します。',
        date: '2018年7月12日',
      },
      {
        infoId: '6',
        subject: '緊急のお知らせ',
        date: '2018年7月12日',
        description: 'デザインのいい仕事場。 WORK IS FUN! 仕事、はかどってますか？ いいアイデアが出ないのは、 ワーキングスペースのデザインが悪いからかもしれません。 アメリカ西海岸の先進的な企業から日本のスマートな会社まで、 いい仕事をするための最…のオフィス環境を取材。 働く場所も自由に選べるこれからの時代に、 それでも集まりたくなる未来の仕事場のカタチを紹介します。',
        important: true,
      },
      ]);
    }, 1000);
  });
});

export const setTabAction = createTypeAction('APP_SET_TAB', (tab: AppTab) => tab);
export const setModeAction = createTypeAction('APP_SET_MODE', (mode: AppMode) => mode);
export const setShowAppMenu = createTypeAction('SET_SHOW_APP_MENU', (show: boolean) => show);
