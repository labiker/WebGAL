import { setStage } from '@/store/stageReducer';
import { webgalStore } from '@/store/store';
import mouseEnterSE from '@/assets/se/mouseEnter.mp3';
import maou_se_system35 from '@/assets/se/maou_se_system35.mp3';
import maou_se_system39 from '@/assets/se/maou_se_system39.mp3';
import maou_se_system40 from '@/assets/se/maou_se_system40.mp3';
import maou_se_system41 from '@/assets/se/maou_se_system41.mp3';
import maou_se_system48 from '@/assets/se/maou_se_system48.mp3';
import Motion_Pop03_1 from '@/assets/se/Motion-Pop03-1.mp3';
import Motion_Pop03_2 from '@/assets/se/Motion-Pop03-2.mp3';
import Motion_Pop03_3 from '@/assets/se/Motion-Pop03-3.mp3';
import Motion_Pop03_4 from '@/assets/se/Motion-Pop03-4.mp3';
import Motion_Pop08_1 from '@/assets/se/Motion-Pop08-1.mp3';
import Motion_Pop08_2 from '@/assets/se/Motion-Pop08-2.mp3';
import Motion_Pop08_3 from '@/assets/se/Motion-Pop08-3.mp3';
import Motion_Pop08_4 from '@/assets/se/Motion-Pop08-4.mp3';
import button_16 from '@/assets/se/button-16.wav';
import button_20 from '@/assets/se/button-20.wav';
import button_50 from '@/assets/se/button-50.wav';
import click_soft_02 from '@/assets/se/click_soft_02.wav';
import Book_Page_Flip from '@/assets/se/Book_Page_Flip.wav';
import page_flip_1 from '@/assets/se/page-flip-1.wav';
import pause from '@/assets/se/pause.mp3';
import pausestart from '@/assets/se/pausestart.wav';
import s_cheremisinov_Click_03 from '@/assets/se/s-cheremisinov-Click-03.wav';
import switch_1 from '@/assets/se/switch-1.wav';
import water_drop_sound from '@/assets/se/water-drop-sound.wav';

// 调用音效
const useSoundEffect = () => {
  const SoundEffectObject = {
    playSeEnter: mouseEnterSE,
    playSeEnterChoose: Motion_Pop03_1,
    playSeEnterTitleButton: Motion_Pop03_2,
    playSeEnterOptionSelect: Motion_Pop03_3,
    playSeEnterMenuPanelSelect: Motion_Pop03_4,
    playSeEnterSavePanelSelect: Motion_Pop03_4,
    playSeEnterLoadPanelSelect: Motion_Pop03_4,
    playSeEnterExtraElement: Motion_Pop08_1,
    playSeEnterCloseButton: Motion_Pop08_2,
    playSeEnterDialogButton: Motion_Pop08_3,
    playSeEnterOptionSlider: Motion_Pop08_4,
    playSeClick: maou_se_system40,
    playSeClickChoose: maou_se_system48,
    playSeClickTitleButton: maou_se_system39,
    playSeClickCloseButton: button_16,
    playSeClickBottomControlPanelButton: button_20,
    playSeClickMenuNormalButton: button_50,
    playSeClickOptionSelect: switch_1,
    playSeClickLoadPanelSelect: page_flip_1,
    playSeClickSavePanelSelect: page_flip_1,
    playSeClickSaveElement: button_50,
    playSeClickLoadElement: button_50,
    playSeClickDialogButton: click_soft_02,
    playSeClickToNextBgmButton: switch_1,
    playSeClickToLastBgmButton: switch_1,
    playSeClickBeginBgmButton: pausestart,
    playSeClickStopBgmButton: pause,
    playSeClickCGPanelSelect: page_flip_1,
    playSeClickCGElement: button_50,
    playSeClickBacklogJumpButton: s_cheremisinov_Click_03,
  };

  const SoundEffectArray = () => {
    return [
      mouseEnterSE,
      maou_se_system35,
      maou_se_system39,
      maou_se_system40,
      maou_se_system41,
      maou_se_system48,
      Motion_Pop03_1,
      Motion_Pop03_2,
      Motion_Pop03_3,
      Motion_Pop03_4,
      Motion_Pop08_1,
      Motion_Pop08_2,
      Motion_Pop08_3,
      Motion_Pop08_4,
      button_16,
      button_20,
      button_50,
      click_soft_02,
      Book_Page_Flip,
      page_flip_1,
      pause,
      pausestart,
      s_cheremisinov_Click_03,
      switch_1,
      water_drop_sound,
    ];
  };

  const playSe = (seName: string) => {
    webgalStore.dispatch(setStage({ key: 'uiSe', value: seName }));
  };

  return {
    SoundEffectObject, // 音效列表 对象
    SoundEffectArray, // 音效列表 数组
    playSe, // 播放音效
  };
};

export default useSoundEffect;
