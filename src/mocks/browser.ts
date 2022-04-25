import { setupWorker } from 'msw';
import handlers from './handler';

const serviceWorker = setupWorker(...handlers());

export default serviceWorker;
