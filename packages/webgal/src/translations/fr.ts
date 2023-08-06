const fr = {
  // 通用
  common: {
    yes: 'OK',
    no: 'Annuler',
  },

  menu: {
    options: {
      title: 'OPTIONS',
      pages: {
        system: {
          title: 'Système',
          options: {
            autoSpeed: {
              title: 'Vitesse de lecture automatique',
              options: {
                slow: 'Lente',
                medium: 'Moyenne',
                fast: 'Rapide',
              },
            },
            language: {
              title: 'Langue',
            },
            resetData: {
              title: 'Effacer ou réinitialiser les données',
              options: {
                clearGameSave: 'Effacer la sauvegarde du jeu',
                resetSettings: 'Réinitialiser les paramètres',
                clearAll: 'Tout effacer',
              },
              dialogs: {
                clearGameSave: 'Êtes-vous sûr de vouloir effacer la sauvegarde du jeu',
                resetSettings: 'Êtes-vous sûr de vouloir réinitialiser tous les paramètres',
                clearAll: 'Êtes-vous sûr de vouloir tout effacer',
              },
            },
            gameSave: {
              title: 'Importer ou exporter la sauvegarde du jeu et les options',
              options: {
                export: 'Exporter la sauvegarde du jeu et les options',
                import: 'Importer la sauvegarde du jeu et les options',
              },
              dialogs: {
                import: {
                  title: 'Êtes-vous sûr de vouloir importer la sauvegarde du jeu et les options',
                  tip: 'Importer la sauvegarde du jeu',
                  error: "Impossible d'analyser la sauvegarde du jeu",
                },
              },
            },
            about: {
              title: 'À propos de WebGAL',
              subTitle: 'WebGAL: Un moteur de visual novel basé sur le web en open-source',
              version: 'Version',
              source: 'Dépôt de code source',
              contributors: 'Contributeurs',
              website: 'Site web',
            },
          },
        },
        display: {
          title: 'Affichage',
          options: {
            textSpeed: {
              title: "Vitesse d'affichage du texte",
              options: {
                slow: 'Lente',
                medium: 'Moyenne',
                fast: 'Rapide',
              },
            },
            textSize: {
              title: 'Taille du texte',
              options: {
                small: 'Petite',
                medium: 'Moyenne',
                large: 'Grande',
              },
            },
            textFont: {
              title: 'Police du texte',
              options: {
                siYuanSimSun: 'LXGW WenKai',
                SimHei: 'Sans',
              },
            },
            textPreview: {
              title: "Aperçu de l'affichage du texte",
              text: 'Vous prévisualisez la police, la taille et la vitesse de lecture du texte, maintenant. Vous pouvez ajuster les options ci-dessus selon votre perception.',
            },
          },
        },
        sound: {
          title: 'Son',
          options: {
            volumeMain: { title: 'Volume principal' },
            vocalVolume: { title: 'Volume des voix' },
            bgmVolume: { title: 'Volume de la musique de fond' },
            seVolume: { title: 'Volume des effets sonores' },
            uiSeVolume: { title: 'Volume de l’interface utilisateur' },
          },
        },
        ui: {
          title: 'UI',
          options: {
            playSeEnter: { title: 'Effet sonore UI (Entrée de la souris)' },
            playSeEnterChoose: { title: 'SE (Lorsque la souris entre dans "choisir")' },
            playSeEnterTitleButton: { title: 'Effet sonore UI (Entrée de la souris sur le bouton du titre)' },
            playSeEnterOptionSelect: {
              title: 'Effet sonore UI (Entrée de la souris sur le bouton de sélection des options)',
            },
            playSeEnterMenuPanelSelect: {
              title: 'Effet sonore UI (Entrée de la souris sur le bouton de sélection du panneau de menu)',
            },
            playSeEnterSavePanelSelect: {
              title: 'Effet sonore UI (Entrée de la souris sur le bouton de sélection du panneau de sauvegarde)',
            },
            playSeEnterLoadPanelSelect: {
              title: 'Effet sonore UI (Entrée de la souris sur le bouton de sélection du panneau de chargement)',
            },
            playSeEnterExtraElement: { title: "Effet sonore UI (Entrée de la souris sur l'élément supplémentaire)" },
            playSeEnterCloseButton: { title: 'Effet sonore UI (Entrée de la souris sur le bouton de fermeture)' },
            playSeEnterDialogButton: {
              title: 'Effet sonore UI (Entrée de la souris sur le bouton de la boîte de dialogue)',
            },
            playSeEnterOptionSlider: { title: "Effet sonore UI (Entrée de la souris sur le curseur d'option)" },
            playSeClick: { title: 'Effet sonore UI (Clic de souris)' },
            playSeClickChoose: { title: 'Effet sonore UI (Clic de souris pour choisir)' },
            playSeClickTitleButton: { title: 'Effet sonore UI (Clic de souris sur le bouton du titre)' },
            playSeClickCloseButton: { title: 'Effet sonore UI (Clic de souris sur le bouton de fermeture)' },
            playSeClickBottomControlPanelButton: {
              title: 'Effet sonore UI (Clic de souris sur le bouton du panneau de contrôle inférieur)',
            },
            playSeClickMenuNormalButton: { title: 'Effet sonore UI (Clic de souris sur le bouton normal du menu)' },
            playSeClickOptionSelect: {
              title: 'Effet sonore UI (Clic de souris sur le bouton de sélection des options)',
            },
            playSeClickLoadPanelSelect: {
              title: 'Effet sonore UI (Clic de souris sur le bouton de sélection du panneau de chargement)',
            },
            playSeClickSavePanelSelect: {
              title: 'Effet sonore UI (Clic de souris sur le bouton de sélection du panneau de sauvegarde)',
            },
            playSeClickSaveElement: { title: "Effet sonore UI (Clic de souris sur l'élément de sauvegarde)" },
            playSeClickLoadElement: { title: "Effet sonore UI (Clic de souris sur l'élément de chargement)" },
            playSeClickDialogButton: {
              title: 'Effet sonore UI (Clic de souris sur le bouton de la boîte de dialogue)',
            },
            playSeClickToNextBgmButton: {
              title: 'Effet sonore UI (Clic de souris sur le bouton pour passer à la prochaine BGM)',
            },
            playSeClickToLastBgmButton: {
              title: 'Effet sonore UI (Clic de souris sur le bouton pour revenir à la BGM précédente)',
            },
            playSeClickBeginBgmButton: {
              title: 'Effet sonore UI (Clic de souris sur le bouton pour commencer la lecture de la BGM)',
            },
            playSeClickStopBgmButton: {
              title: 'Effet sonore UI (Clic de souris sur le bouton pour arrêter la lecture de la BGM)',
            },
            playSeClickCGPanelSelect: {
              title: 'Effet sonore UI (Clic de souris sur le bouton de sélection du panneau CG)',
            },
            playSeClickCGElement: { title: "Effet sonore UI (Clic de souris sur l'élément CG)" },
            playSeClickBacklogJumpButton: { title: 'Effet sonore UI (Clic de souris sur le bouton' },
          },
        },
        // language: {
        //   title: 'Langue',
        //   options: {
        //   },
        // },
      },
    },
    saving: {
      title: 'SAUVEGARDER',
      isOverwrite: 'Êtes-vous sûr de vouloir écraser cette sauvegarde ?',
    },
    loadSaving: {
      title: 'CHARGER',
    },
    title: {
      title: 'TITRE',
    },
    exit: {
      title: 'RETOUR',
    },
  },

  title: {
    start: {
      title: 'COMMENCER',
      subtitle: '',
    },
    continue: {
      title: 'CONTINUER',
      subtitle: '',
    },
    options: {
      title: 'OPTIONS',
      subtitle: '',
    },
    load: {
      title: 'CHARGER',
      subtitle: '',
    },
    extra: {
      title: 'EXTRA',
      subtitle: '',
    },
  },

  gaming: {
    noSaving: 'Aucune sauvegarde',
    buttons: {
      hide: 'Masquer',
      show: 'Afficher',
      backlog: 'Journal',
      replay: 'Rejouer',
      auto: 'Automatique',
      forward: 'Avancer',
      quicklySave: 'Sauvegarde rapide',
      quicklyLoad: 'Chargement rapide',
      save: 'Sauvegarder',
      load: 'Charger',
      options: 'Options',
      title: 'Titre',
    },
  },

  extra: {
    title: 'EXTRA',
  },
};

export default fr;
