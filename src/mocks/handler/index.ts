import authHandlers from './src/auth';
import postHandlers from './src/post';
import imageHandlers from './src/image';
/**
 * API
 */
export default function handlers() {
  return [
    ...Object.values(authHandlers),
    ...Object.values(postHandlers),
    ...Object.values(imageHandlers),
  ];
}
