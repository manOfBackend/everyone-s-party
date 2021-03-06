import {
  useDispatch as useOriginDisaptch,
  useSelector as useOriginSelector,
} from 'react-redux';
import { RootState } from 'typesafe-actions';
import isEqual from 'fast-deep-equal';
import { store } from './store';

export const useDispatch = () => useOriginDisaptch<typeof store['dispatch']>();

export const useSelector = <TState = RootState, TSelected = unknown>(
  selector: (state: TState) => TSelected,
  equalityFn: (left: TSelected, right: TSelected) => boolean = isEqual,
): TSelected => useOriginSelector(selector, equalityFn);
