import authHandlers from './src/auth';
import postHandlers from './src/post';
/**
 * API
 */
export default function handlers() {
  return [
    ...Object.values(authHandlers),
    ...Object.values(postHandlers),
  ];
}
