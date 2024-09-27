import { $, debounce } from './helpers';
import { BASE_WIDTH, BASE_HEIGHT } from './constants';

const resizeScreen = debounce(() => {
  const bodyElement = $('#root') as HTMLBodyElement;

  const scale = Math.min(
    window.innerWidth / BASE_WIDTH,
    window.innerHeight / BASE_HEIGHT
  );

  bodyElement.setAttribute('style', `transform: scale(${scale});`);
}, 100);

export default resizeScreen;
