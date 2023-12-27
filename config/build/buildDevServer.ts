import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port, mode } = options;
    const isDev = mode === 'development';

    return isDev
        ? {
              port: port || 3000,
              open: true,
              historyApiFallback: true,
          }
        : undefined;
}
