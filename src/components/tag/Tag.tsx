import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PauseIcon from '@/assets/images/icon/pause.svg';
import PlayIcon from '@/assets/images/icon/play.svg';
import type {TagProps} from './types';

const Tag: React.FC & {
  Dot: React.FC<TagProps>;
  Pause: React.FC<TagProps>;
  Play: React.FC<TagProps>;
} = () => null;

const Dot: React.FC<TagProps> = ({color}) => (
  <View
    className="w-[10px] h-[10px] rounded-full"
    style={{backgroundColor: color}}
  />
);

const Pause: React.FC<TagProps> = ({color}) => (
  <TouchableOpacity
    className="w-[16px] h-[16px] rounded-full justify-center items-center"
    style={{backgroundColor: color}}
  >
    <PauseIcon width={8} height={8} />
  </TouchableOpacity>
);

const Play: React.FC<TagProps> = ({color}) => (
  <TouchableOpacity
    className="w-[16px] h-[16px] rounded-full justify-center items-center"
    style={{backgroundColor: color}}
  >
    <PlayIcon width={8} height={8} />
  </TouchableOpacity>
);

Tag.Dot = Dot;
Tag.Pause = Pause;
Tag.Play = Play;

export {Tag};
