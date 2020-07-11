/**
 *
 * Asynchronously loads the component for Minimal
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
