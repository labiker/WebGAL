import './select.css';
import { ISelect } from '@/Components/UI/Menu/Options/OptionInterface';
import { useEffect, useState } from 'react';
import useSoundEffect from '@/hooks/useSoundEffect';

export const OptionSelect = (props: ISelect) => {
  const { playSe } = useSoundEffect();
  const [selectedValue, setSelectedValue] = useState(props.initValue);
  const optionList = props.options.map((value: string) => <option key={value.toString()}>{value}</option>);

  // 确保输入框的值只在父组件传递的 value 发生变化时才更新
  useEffect(() => {
    setSelectedValue(props.initValue);
  }, [props.initValue]);

  return (
    <div className="Option_WebGAL_slider">
      <select
        id={props.uniqueID}
        defaultValue={selectedValue}
        onChange={props.onChange}
        onFocus={() => playSe('playSeEnterOptionSlider')}
        onMouseEnter={() => playSe('playSeEnter')}
      >
        {optionList}
      </select>
    </div>
  );
};
