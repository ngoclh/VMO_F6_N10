import isEqual from 'react-fast-compare';
import {useSelector as RXUseSelector} from 'react-redux';

import {RootState} from '../../features/N10_redux/store/index';

export const useSelector = <T>(
  selector: (state: RootState) => T,
  equalityFn = isEqual,
) => RXUseSelector(selector, equalityFn);
