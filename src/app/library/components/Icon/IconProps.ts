import {IconTypes} from '../../../assets/icon';

export interface IconProps {
  color?: string;

  size?: number;

  source: IconTypes;

  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center' | undefined;
}
