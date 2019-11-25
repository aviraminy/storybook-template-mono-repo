const path = require('path');
const tsConfigFullPath = path.resolve(__dirname,'./tsconfig.json')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
    include: [path.resolve(__dirname, '../'),path.resolve(__dirname, '../../spaceit-components/')],
  });

  config.module.rules.push({
    test: /\.(ts|tsx|d.ts)$/,
    include: [path.resolve(__dirname, '../'),path.resolve(__dirname, '../../spaceit-components/lib/'),path.resolve(__dirname, '../node_modules/spaceit-components/lib/')],
   

    use: [
       {
        loader: require.resolve('ts-loader'),
        options: {
          configFile: tsConfigFullPath
        } 
      }, 
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: tsConfigFullPath
        },
      },
    ],
  });

  config.resolve.extensions.push('.d.ts','.ts', '.tsx');
  config.resolve.extensions.push('.scss');
  return config;
};