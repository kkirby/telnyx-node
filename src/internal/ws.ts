import type * as WS from 'ws';

/**
 * Loads the optional `ws` peer dependency at runtime. Throws a descriptive
 * error if the package has not been installed by the consumer.
 */
export function requireWS(): typeof WS {
  try {
    return require('ws');
  } catch {
    throw new Error(
      'The `ws` package is required for WebSocket connections. Install it with: npm install ws',
    );
  }
}
