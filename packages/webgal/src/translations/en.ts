const en = {
  // 通用
  common: {
    yes: 'OK',
    no: 'Cancel',
  },

  menu: {
    options: {
      title: 'OPTIONS',
      pages: {
        system: {
          title: 'System',
          options: {
            autoSpeed: {
              title: 'Autoplay Speed',
              options: {
                slow: 'Slow',
                medium: 'Medium',
                fast: 'Fast',
              },
            },
            language: {
              title: 'Language',
            },
            resetData: {
              title: 'Clear or Reset Data',
              options: {
                clearGameSave: 'Clear game saving',
                resetSettings: 'Reset settings',
                clearAll: 'Clear all data',
              },
              dialogs: {
                clearGameSave: 'Are you sure you want to clear game saving',
                resetSettings: 'Are you sure you want to reset all settings',
                clearAll: 'Are you sure you want to clear all data',
              },
            },
            gameSave: {
              title: 'Import or Export Game Saving and Options',
              options: {
                export: 'Export game saving and options',
                import: 'Import game saving and options',
              },
              dialogs: {
                import: {
                  title: 'Are you sure you want to import game saving and options',
                  tip: 'Import game saving',
                  error: 'Parse game saving failed',
                },
              },
            },
            about: {
              title: 'About WebGAL',
              subTitle: 'WebGAL: An Open-Source Web-Based Visual Novel Engine',
              version: 'Version',
              source: 'Source Code Repository',
              contributors: 'Contributors',
              website: 'Website',
            },
          },
        },
        display: {
          title: 'Display',
          options: {
            textSpeed: {
              title: 'Speed of Text Showing',
              options: {
                slow: 'Slow',
                medium: 'Medium',
                fast: 'Fast',
              },
            },
            textSize: {
              title: 'Text Size',
              options: {
                small: 'Small',
                medium: 'Medium',
                large: 'Large',
              },
            },
            textFont: {
              title: 'Text Font',
              options: {
                siYuanSimSun: 'LXGW WenKai',
                SimHei: 'Sans',
              },
            },
            textPreview: {
              title: 'Preview Text Showing',
              text: "You are previewing the text's font, size and playback speed, now. You can adjust the above options according to your perception.",
            },
          },
        },
        sound: {
          title: 'Sound',
          options: {
            volumeMain: { title: 'Main Volume' },
            vocalVolume: { title: 'Vocal Volume' },
            bgmVolume: { title: 'BGM Volume' },
            seVolume: { title: 'Sound Effects Volume' },
            uiSeVolume: { title: 'UI Sound Effects Volume' },
          },
        },
        ui: {
          title: 'UI',
          options: {
            playSeEnter: { title: 'UI Sound Effect (Mouse Enter)' },
            playSeEnterChoose: { title: 'SE (Mouse Enters "Choose")' },
            playSeEnterTitleButton: { title: 'UI Sound Effect (Mouse Enter Title Button)' },
            playSeEnterOptionSelect: { title: 'UI Sound Effect (Mouse Enter Option Select Button)' },
            playSeEnterMenuPanelSelect: { title: 'UI Sound Effect (Mouse Enter Menu Panel Select Button)' },
            playSeEnterSavePanelSelect: { title: 'UI Sound Effect (Mouse Enter Save Panel Select Button)' },
            playSeEnterLoadPanelSelect: { title: 'UI Sound Effect (Mouse Enter Load Panel Select Button)' },
            playSeEnterExtraElement: { title: 'UI Sound Effect (Mouse Enter Extra Element)' },
            playSeEnterCloseButton: { title: 'UI Sound Effect (Mouse Enter Close Button)' },
            playSeEnterDialogButton: { title: 'UI Sound Effect (Mouse Enter Dialog Button)' },
            playSeEnterOptionSlider: { title: 'UI Sound Effect (Mouse Enter Option Slider)' },
            playSeClick: { title: 'UI Sound Effect (Mouse Click)' },
            playSeClickChoose: { title: 'UI Sound Effect (Mouse Click "Choose")' },
            playSeClickTitleButton: { title: 'UI Sound Effect (Mouse Click Title Button)' },
            playSeClickCloseButton: { title: 'UI Sound Effect (Mouse Click Close Button)' },
            playSeClickBottomControlPanelButton: { title: 'UI Sound Effect (Mouse Click Bottom Control Panel Button)' },
            playSeClickMenuNormalButton: { title: 'UI Sound Effect (Mouse Click Menu Normal Button)' },
            playSeClickOptionSelect: { title: 'UI Sound Effect (Mouse Click Option Select Button)' },
            playSeClickLoadPanelSelect: { title: 'UI Sound Effect (Mouse Click Load Panel Select Button)' },
            playSeClickSavePanelSelect: { title: 'UI Sound Effect (Mouse Click Save Panel Select Button)' },
            playSeClickSaveElement: { title: 'UI Sound Effect (Mouse Click Save Element)' },
            playSeClickLoadElement: { title: 'UI Sound Effect (Mouse Click Load Element)' },
            playSeClickDialogButton: { title: 'UI Sound Effect (Mouse Click Dialog Button)' },
            playSeClickToNextBgmButton: { title: 'UI Sound Effect (Mouse Click Next BGM Button)' },
            playSeClickToLastBgmButton: { title: 'UI Sound Effect (Mouse Click Last BGM Button)' },
            playSeClickBeginBgmButton: { title: 'UI Sound Effect (Mouse Click Begin BGM Button)' },
            playSeClickStopBgmButton: { title: 'UI Sound Effect (Mouse Click Stop BGM Button)' },
            playSeClickCGPanelSelect: { title: 'UI Sound Effect (Mouse Click CG Panel Select Button)' },
            playSeClickCGElement: { title: 'UI Sound Effect (Mouse Click CG Element)' },
            playSeClickBacklogJumpButton: { title: 'UI Sound Effect (Mouse Click Backlog Jump Button)' },
          },
        },
        // language: {
        //   title: '语言',
        //   options: {
        //   },
        // },
      },
    },
    saving: {
      title: 'SAVE',
      isOverwrite: 'Are you sure you want to overwrite this save?',
    },
    loadSaving: {
      title: 'LOAD',
    },
    title: {
      title: 'TITLE',
    },
    exit: {
      title: 'BACK',
    },
  },

  title: {
    start: {
      title: 'START',
      subtitle: '',
    },
    continue: {
      title: 'CONTINUE',
      subtitle: '',
    },
    options: {
      title: 'OPTIONS',
      subtitle: '',
    },
    load: {
      title: 'LOAD',
      subtitle: '',
    },
    extra: {
      title: 'EXTRA',
      subtitle: '',
    },
  },

  gaming: {
    noSaving: 'No saving',
    buttons: {
      hide: 'Hide',
      show: 'Show',
      backlog: 'Backlog',
      replay: 'Replay',
      auto: 'Auto',
      forward: 'Forward',
      quicklySave: 'Quickly Save',
      quicklyLoad: 'Quickly Save',
      save: 'Save',
      load: 'Load',
      options: 'Options',
      title: 'Title',
    },
  },

  extra: {
    title: 'EXTRA',
  },
};

export default en;
