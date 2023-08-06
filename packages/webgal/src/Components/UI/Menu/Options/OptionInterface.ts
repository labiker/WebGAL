/**
 * @interface INormalButton 普通按钮的参数
 */
import { ChangeEvent } from 'react';

export interface INormalButton {
  textList: Array<string>;
  functionList: Array<any>;
  currentChecked: number;
}

export interface ISlider {
  uniqueID: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  initValue: number;
}

export interface ISelect {
  uniqueID: string;
  options: [] | Array<string>;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  initValue: string;
}
