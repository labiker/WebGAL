const jp = {
  // 通用
  common: {
    yes: 'はい',
    no: 'いいえ',
  },

  menu: {
    options: {
      title: 'CONFIG',
      pages: {
        system: {
          title: 'システム',
          options: {
            autoSpeed: {
              title: '自動再生速度',
              options: {
                slow: '遅く',
                medium: '標準',
                fast: '速く',
              },
            },
            language: {
              title: '言語',
            },
            resetData: {
              title: 'データの削除またに復元',
              options: {
                clearGameSave: 'すべてのアーカイブを削除',
                resetSettings: 'デフォルト設置を復元',
                clearAll: 'すべてのデータを削除',
              },
              dialogs: {
                clearGameSave: 'アーカイブをクリアしてもよろしいですか？',
                resetSettings: 'デフォルト設定を復元してもよろしいですか？',
                clearAll: 'すべてのデータを削除してもよろしいですか？',
              },
            },
            gameSave: {
              title: 'アーカイブとオプションのインポートまたはエクスポート',
              options: {
                export: 'アーカイブとオプションのエクスポート',
                import: 'アーカイブとオプションのインポート',
              },
              dialogs: {
                import: {
                  title: 'アーカイブとオプションをインポートしますか？',
                  tip: 'インポートアーカイブ',
                  error: 'アーカイブの解析に失败しました',
                },
              },
            },
            about: {
              title: 'WebGALについて',
              subTitle: 'WebGAL：開源のウェブ基盤視覚小説エンジン',
              version: '版数',
              source: '源コード保管所',
              contributors: '貢献者',
              website: 'ウェブサイト',
            },
          },
        },
        display: {
          title: 'ウィンドウ',
          options: {
            textSpeed: {
              title: 'テキスト表示速度',
              options: {
                slow: '遅く',
                medium: '標準',
                fast: '速く',
              },
            },
            textSize: {
              title: 'テキストサイズ',
              options: {
                small: '小',
                medium: '中',
                large: '大',
              },
            },
            textFont: {
              title: 'フォント',
              options: {
                siYuanSimSun: '霞鹜文楷',
                SimHei: '黒体',
              },
            },
            textPreview: {
              title: 'テキスト表示プレビュー',
              // todo
              text: 'プレビューはテキストボックスのテキストサイズとテキスト表示速度です。上記のオプションでフォントも変更できます。',
            },
          },
        },
        sound: {
          title: 'サウンド',
          options: {
            volumeMain: { title: 'MAIN 音量' },
            vocalVolume: { title: 'VOICE 音量' },
            bgmVolume: { title: 'BGM 音量' },
            seVolume: { title: 'SE 音量' },
            uiSeVolume: { title: 'UI 効果音音量' },
          },
        },
        ui: {
          title: 'UI',
          options: {
            playSeEnter: { title: 'UI効果音（マウスエンター）' },
            playSeEnterChoose: { title: 'UI効果音（マウスが「選択」に入る時）' },
            playSeEnterTitleButton: { title: 'UI効果音（タイトルボタンにマウスエンターした時）' },
            playSeEnterOptionSelect: { title: 'UI効果音（オプションセレクトボタンにマウスエンターした時）' },
            playSeEnterMenuPanelSelect: { title: 'UI効果音（メニューパネルセレクトボタンにマウスエンターした時）' },
            playSeEnterSavePanelSelect: { title: 'UI効果音（セーブパネルセレクトボタンにマウスエンターした時）' },
            playSeEnterLoadPanelSelect: { title: 'UI効果音（ロードパネルセレクトボタンにマウスエンターした時）' },
            playSeEnterExtraElement: { title: 'UI効果音（エクストラエレメントにマウスエンターした時）' },
            playSeEnterCloseButton: { title: 'UI効果音（閉じるボタンにマウスエンターした時）' },
            playSeEnterDialogButton: { title: 'UI効果音（ダイアログボタンにマウスエンターした時）' },
            playSeEnterOptionSlider: { title: 'UI効果音（オプションスライダーにマウスエンターした時）' },
            playSeClick: { title: 'UI効果音（マウスクリック）' },
            playSeClickChoose: { title: 'UI効果音（分岐選択時のマウスクリック）' },
            playSeClickTitleButton: { title: 'UI効果音（タイトルボタンのマウスクリック）' },
            playSeClickCloseButton: { title: 'UI効果音（閉じるボタンのマウスクリック）' },
            playSeClickBottomControlPanelButton: {
              title: 'UI効果音（ボトムコントロールパネルボタンのマウスクリック）',
            },
            playSeClickMenuNormalButton: { title: 'UI効果音（メニューノーマルボタンのマウスクリック）' },
            playSeClickOptionSelect: { title: 'UI効果音（オプションセレクトボタンのマウスクリック）' },
            playSeClickLoadPanelSelect: { title: 'UI効果音（ロードパネルセレクトボタンのマウスクリック）' },
            playSeClickSavePanelSelect: { title: 'UI効果音（セーブパネルセレクトボタンのマウスクリック）' },
            playSeClickSaveElement: { title: 'UI効果音（セーブエレメントのマウスクリック）' },
            playSeClickLoadElement: { title: 'UI効果音（ロードエレメントのマウスクリック）' },
            playSeClickDialogButton: { title: 'UI効果音（ダイアログボタンのマウスクリック）' },
            playSeClickToNextBgmButton: { title: 'UI効果音（次のBGMボタンのマウスクリック）' },
            playSeClickToLastBgmButton: { title: 'UI効果音（前のBGMボタンのマウスクリック）' },
            playSeClickBeginBgmButton: { title: 'UI効果音（BGM再生ボタンのマウスクリック）' },
            playSeClickStopBgmButton: { title: 'UI効果音（BGM停止ボタンのマウスクリック）' },
            playSeClickCGPanelSelect: { title: 'UI効果音（CGパネルセレクトボタンのマウスクリック）' },
            playSeClickCGElement: { title: 'UI効果音（CGエレメントのマウスクリック）' },
            playSeClickBacklogJumpButton: { title: 'UI効果音（バックログジャンプボタンのマウスクリック）' },
          },
        },
        // language: {
        //   title: '言語',
        //   options: {
        //   },
        // },
      },
    },
    saving: {
      title: 'SAVE',
      isOverwrite: '上書きしますか？',
    },
    loadSaving: {
      title: 'LOAD',
    },
    title: {
      title: 'HOME',
    },
    exit: {
      title: 'BACK',
    },
  },

  // todo
  title: {
    start: {
      title: '初めから',
      subtitle: 'START',
    },
    continue: {
      title: '続きから',
      subtitle: 'CONTINUE',
    },
    options: {
      title: '設定',
      subtitle: 'CONFIG',
    },
    load: {
      title: 'ロード',
      subtitle: 'LOAD',
    },
    extra: {
      title: '鑑賞モード',
      subtitle: 'EXTRA',
    },
  },

  gaming: {
    noSaving: 'クイックセーブなし',
    buttons: {
      hide: 'CLOSE',
      show: 'SHOW',
      backlog: 'LOG',
      replay: 'REPLAY',
      auto: 'AUTO',
      forward: 'SKIP',
      quicklySave: 'QUICK SAVE',
      quicklyLoad: 'QUICK LOAD',
      save: 'SAVE',
      load: 'LOAD',
      options: 'CONFIG',
      title: 'HOME',
    },
  },

  extra: {
    title: '鑑賞モード',
  },
};

export default jp;
