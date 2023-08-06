/**
 * 用于存储与本地存储交换的状态信息。
 * 这些状态会在指定的生命周期与本地存储发生交换，比如打开存档界面、存档、修改设置时。
 * 在引擎初始化时会将这些状态从本地存储加载到运行时状态。
 */
import { language } from '@/config/language';
import {
  IAppreciationAsset,
  ISaveData,
  ISetOptionDataPayload,
  ISetUserDataPayload,
  IUserData,
  playSpeed,
  textFont,
  textSize,
} from '@/store/userDataInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cloneDeep from 'lodash/cloneDeep';
import useSoundEffect from '@/hooks/useSoundEffect';

const { SoundEffectObject } = useSoundEffect();

const initialOptionSet = {
  slPage: 1,
  volumeMain: 100, // 主音量
  textSpeed: playSpeed.normal, // 文字速度
  autoSpeed: playSpeed.normal, // 自动播放速度
  textSize: textSize.medium,
  vocalVolume: 100, // 语音音量
  bgmVolume: 25, // 背景音乐音量
  seVolume: 100, // 音效音量
  uiSeVolume: 25, // UI音效音量
  textboxFont: textFont.song,
  language: language.zhCn,
  playSeEnter: SoundEffectObject.playSeEnter, // 鼠标进入
  playSeEnterChoose: SoundEffectObject.playSeEnterChoose, // 鼠标进入分支选择
  playSeEnterTitleButton: SoundEffectObject.playSeEnterTitleButton, // 鼠标进入标题按钮
  playSeEnterOptionSelect: SoundEffectObject.playSeEnterOptionSelect, // 鼠标进入游戏选项切换按钮
  playSeEnterMenuPanelSelect: SoundEffectObject.playSeEnterMenuPanelSelect, // 鼠标进入菜单页切换按钮
  playSeEnterSavePanelSelect: SoundEffectObject.playSeEnterSavePanelSelect, // 鼠标进入存档页切换按钮
  playSeEnterLoadPanelSelect: SoundEffectObject.playSeEnterLoadPanelSelect, // 鼠标进入读档页切换按钮
  playSeEnterExtraElement: SoundEffectObject.playSeEnterExtraElement, // 鼠标进入鉴赏元素
  playSeEnterCloseButton: SoundEffectObject.playSeEnterCloseButton, // 鼠标进入关闭按钮
  playSeEnterDialogButton: SoundEffectObject.playSeEnterDialogButton, // 鼠标进入提示框按钮
  playSeEnterOptionSlider: SoundEffectObject.playSeEnterOptionSlider, // 鼠标进入滑块选项
  playSeClick: SoundEffectObject.playSeClick, // 鼠标点击
  playSeClickChoose: SoundEffectObject.playSeClickChoose, // 鼠标点击分支选择
  playSeClickTitleButton: SoundEffectObject.playSeClickTitleButton, // 鼠标点击标题按钮
  playSeClickCloseButton: SoundEffectObject.playSeClickCloseButton, // 鼠标点击关闭按钮
  playSeClickBottomControlPanelButton: SoundEffectObject.playSeClickBottomControlPanelButton, // 鼠标点击底部控制按钮
  playSeClickMenuNormalButton: SoundEffectObject.playSeClickMenuNormalButton, // 鼠标点击菜单页普通按钮
  playSeClickOptionSelect: SoundEffectObject.playSeClickOptionSelect, // 鼠标点击游戏选项切换按钮
  playSeClickLoadPanelSelect: SoundEffectObject.playSeClickLoadPanelSelect, // 鼠标点击读档页切换按钮
  playSeClickSavePanelSelect: SoundEffectObject.playSeClickSavePanelSelect, // 鼠标点击存档页切换按钮
  playSeClickSaveElement: SoundEffectObject.playSeClickSaveElement, // 鼠标点击存档元素
  playSeClickLoadElement: SoundEffectObject.playSeClickLoadElement, // 鼠标点击读档元素
  playSeClickDialogButton: SoundEffectObject.playSeClickDialogButton, // 鼠标点击提示框按钮
  playSeClickToNextBgmButton: SoundEffectObject.playSeClickToNextBgmButton, // 鼠标点击下一首BGM按钮
  playSeClickToLastBgmButton: SoundEffectObject.playSeClickToLastBgmButton, // 鼠标点击上一首BGM按钮
  playSeClickBeginBgmButton: SoundEffectObject.playSeClickBeginBgmButton, // 鼠标点击开始播放BGM按钮
  playSeClickStopBgmButton: SoundEffectObject.playSeClickStopBgmButton, // 鼠标点击停止播放BGM按钮
  playSeClickCGPanelSelect: SoundEffectObject.playSeClickCGPanelSelect, // 鼠标点击CG页切换按钮
  playSeClickCGElement: SoundEffectObject.playSeClickCGElement, // 鼠标点击CG元素
  playSeClickBacklogJumpButton: SoundEffectObject.playSeClickBacklogJumpButton, // 鼠标点击日志页回溯按钮
};

// 初始化用户数据
export const initState: IUserData = {
  saveData: [],
  optionData: initialOptionSet,
  appreciationData: {
    bgm: [],
    cg: [],
  },
  quickSaveData: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState: cloneDeep(initState),
  reducers: {
    /**
     * 设置用户数据
     * @param state
     * @param action
     */
    setUserData: (state, action: PayloadAction<ISetUserDataPayload>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    unlockCgInUserData: (state, action: PayloadAction<IAppreciationAsset>) => {
      const { name, url, series } = action.payload;
      // 检查是否存在
      let isExist = false;
      state.appreciationData.cg.forEach((e) => {
        if (name === e.name) {
          isExist = true;
          e.url = url;
          e.series = series;
        }
      });
      if (!isExist) {
        state.appreciationData.cg.push(action.payload);
      }
    },
    unlockBgmInUserData: (state, action: PayloadAction<IAppreciationAsset>) => {
      const { name, url, series } = action.payload;
      // 检查是否存在
      let isExist = false;
      state.appreciationData.bgm.forEach((e) => {
        if (name === e.name) {
          isExist = true;
          e.url = url;
          e.series = series;
        }
      });
      if (!isExist) {
        state.appreciationData.bgm.push(action.payload);
      }
    },
    /**
     * 替换用户数据
     * @param state
     * @param action
     */
    resetUserData: (state, action: PayloadAction<IUserData>) => {
      Object.assign(state, action.payload);
    },
    /**
     * 设置选项数据
     * @param state
     * @param action
     */
    setOptionData: (state, action: PayloadAction<ISetOptionDataPayload>) => {
      const { key, value } = action.payload;
      (state.optionData as any)[key] = value;
    },
    /**
     * 设置存档/读档页面
     * @param state
     * @param action
     */
    setSlPage: (state, action: PayloadAction<number>) => {
      state.optionData.slPage = action.payload;
    },
    setFastSave: (state, action: PayloadAction<ISaveData | null>) => {
      state.quickSaveData = action.payload;
    },
    resetOptionSet(state) {
      Object.assign(state.optionData, initialOptionSet);
    },
    resetAllData(state) {
      Object.assign(state, cloneDeep(initState));
    },
    resetSaveData(state) {
      state.saveData.splice(0, state.saveData.length);
    },
  },
});

export const {
  setUserData,
  resetUserData,
  setOptionData,
  setSlPage,
  unlockCgInUserData,
  unlockBgmInUserData,
  setFastSave,
  resetOptionSet,
  resetSaveData,
  resetAllData,
} = userDataSlice.actions;
export default userDataSlice.reducer;

// /**
//  * 创建用户数据的状态管理
//  * @return {IUserData} 用户数据
//  * @return {function} 改变用户数据
//  */
// export function userDataStateStore():UserDataStore {
//     const [userDataState, setUserDataState] = useState(initState);
//
//     // 设置用户数据
//     const setUserData = <K extends keyof IUserData>(key: K, value: any) => {
//
//         setUserDataState(state => {
//             state[key] = value;
//             return {...state};
//         });
//
//     };
//
//     // 替换用户数据（多用于与本地存储交互）
//     const replaceUserData = (newUserData: IUserData) => {
//
//         setUserDataState(state => ({...state, ...newUserData}));
//     };
//
//     const setOptionData = <K extends keyof IOptionData>(key: K, value: any) => {
//         setUserDataState(state => {
//             state.optionData[key] = value;
//             return {...state};
//         });
//     };
//
//     const setSlPage = (index: number) => {
//         setUserDataState(state => {
//             state.optionData.slPage = index;
//             return {...state};
//         });
//
//     };
//
//     return {
//         userDataState,
//         setUserData,
//         replaceUserData,
//         setOptionData,
//         setSlPage,
//     };
// }
