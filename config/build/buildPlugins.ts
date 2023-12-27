import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const { mode, paths, analyzer } = options;
    const isDev = mode === 'development';
    const isProd = mode === 'production';
    const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({ template: paths.html })];

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css',
                chunkFilename: 'css/[name].[contenthash].css',
            })
        );
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
