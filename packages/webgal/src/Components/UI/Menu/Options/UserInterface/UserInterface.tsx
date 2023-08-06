import styles from '@/Components/UI/Menu/Options/options.module.scss';
import { NormalOption } from '@/Components/UI/Menu/Options/NormalOption';
import { OptionSelect } from '@/Components/UI/Menu/Options/OptionSelect';
import { setOptionData } from '@/store/userDataReducer';
import { setStorage } from '@/Core/controller/storage/storageController';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import useTrans from '@/hooks/useTrans';
import useSoundEffect from '@/hooks/useSoundEffect';
import { useEffect } from 'react';

export function UserInterface() {
  const userDataState = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const t = useTrans('menu.options.pages.ui.options.');
  const { SoundEffectArray } = useSoundEffect();

  useEffect(() => {
    console.log('SoundEffectList: ' + SoundEffectArray);
  }, []);

  return (
    <div className={styles.Options_main_content_half}>
      <NormalOption key="option9" title={t('playSeEnter.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnter}
          uniqueID={t('playSeEnter.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnter', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option10" title={t('playSeEnterChoose.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterChoose}
          uniqueID={t('playSeEnterChoose.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterChoose', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option11" title={t('playSeEnterTitleButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterTitleButton}
          uniqueID={t('playSeEnterTitleButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterTitleButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option12" title={t('playSeEnterOptionSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterOptionSelect}
          uniqueID={t('playSeEnterOptionSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterOptionSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option13" title={t('playSeEnterMenuPanelSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterMenuPanelSelect}
          uniqueID={t('playSeEnterMenuPanelSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterMenuPanelSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option14" title={t('playSeEnterSavePanelSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterSavePanelSelect}
          uniqueID={t('playSeEnterSavePanelSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterSavePanelSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option15" title={t('playSeEnterLoadPanelSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterLoadPanelSelect}
          uniqueID={t('playSeEnterLoadPanelSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterLoadPanelSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option16" title={t('playSeEnterExtraElement.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterExtraElement}
          uniqueID={t('playSeEnterExtraElement.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterExtraElement', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option17" title={t('playSeEnterCloseButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterCloseButton}
          uniqueID={t('playSeEnterCloseButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterCloseButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option18" title={t('playSeEnterDialogButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterDialogButton}
          uniqueID={t('playSeEnterDialogButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterDialogButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option19" title={t('playSeEnterOptionSlider.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeEnterOptionSlider}
          uniqueID={t('playSeEnterOptionSlider.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeEnterOptionSlider', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option20" title={t('playSeClick.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClick}
          uniqueID={t('playSeClick.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClick', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option21" title={t('playSeClickChoose.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickChoose}
          uniqueID={t('playSeClickChoose.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickChoose', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option22" title={t('playSeClickTitleButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickTitleButton}
          uniqueID={t('playSeClickTitleButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickTitleButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option23" title={t('playSeClickCloseButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickCloseButton}
          uniqueID={t('playSeClickCloseButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickCloseButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option24" title={t('playSeClickBottomControlPanelButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickBottomControlPanelButton}
          uniqueID={t('playSeClickBottomControlPanelButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickBottomControlPanelButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option25" title={t('playSeClickMenuNormalButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickMenuNormalButton}
          uniqueID={t('playSeClickMenuNormalButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickMenuNormalButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option26" title={t('playSeClickOptionSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickOptionSelect}
          uniqueID={t('playSeClickOptionSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickOptionSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option27" title={t('playSeClickLoadPanelSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickLoadPanelSelect}
          uniqueID={t('playSeClickLoadPanelSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickLoadPanelSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option28" title={t('playSeClickSavePanelSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickSavePanelSelect}
          uniqueID={t('playSeClickSavePanelSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickSavePanelSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option29" title={t('playSeClickSaveElement.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickSaveElement}
          uniqueID={t('playSeClickSaveElement.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickSaveElement', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option30" title={t('playSeClickLoadElement.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickLoadElement}
          uniqueID={t('playSeClickLoadElement.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickLoadElement', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option31" title={t('playSeClickDialogButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickDialogButton}
          uniqueID={t('playSeClickDialogButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickDialogButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option32" title={t('playSeClickToNextBgmButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickToNextBgmButton}
          uniqueID={t('playSeClickToNextBgmButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickToNextBgmButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option33" title={t('playSeClickToLastBgmButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickToLastBgmButton}
          uniqueID={t('playSeClickToLastBgmButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickToLastBgmButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option34" title={t('playSeClickBeginBgmButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickBeginBgmButton}
          uniqueID={t('playSeClickBeginBgmButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickBeginBgmButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option35" title={t('playSeClickStopBgmButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickStopBgmButton}
          uniqueID={t('playSeClickStopBgmButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickStopBgmButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option36" title={t('playSeClickCGPanelSelect.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickCGPanelSelect}
          uniqueID={t('playSeClickCGPanelSelect.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickCGPanelSelect', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option37" title={t('playSeClickCGElement.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickCGElement}
          uniqueID={t('playSeClickCGElement.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickCGElement', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
      <NormalOption key="option38" title={t('playSeClickBacklogJumpButton.title')}>
        <OptionSelect
          initValue={userDataState.optionData.playSeClickBacklogJumpButton}
          uniqueID={t('playSeClickBacklogJumpButton.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'playSeClickBacklogJumpButton', value: String(newValue) }));
            setStorage();
          }}
          options={SoundEffectArray()}
        />
      </NormalOption>
    </div>
  );
}
