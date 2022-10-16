import { useContext } from 'react';
import { MediaContext} from '../context/MediaContext';

export function useMediaContext() {
  return useContext(MediaContext);
}
