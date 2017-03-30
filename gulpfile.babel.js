import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import productionConfig from './webpack.production.config';
import devServerConfig from './webpack.dev-server.config';

gulp.task('serve', () => {
  new WebpackDevServer(webpack(devServerConfig), {
		port: 3000,
    hot: true,
    publicPath: devServerConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(devServerConfig.port, 'localhost', (err) => {
    /* eslint-disable no-console */
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Listening at localhost: ${devServerConfig.port}`);
    /* eslint-enable no-console */
  });
});

gulp.task('build', done => {
  webpack(productionConfig).run((err, stats) => {
    /* eslint-disable no-console */
    err && console.log('Error', err);
    stats && console.log(stats.toString({ colors: true }));
    done && done();
    /* eslint-enable no-console */
  });
});

