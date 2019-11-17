const presets = [ '@babel/preset-react' ];
const plugins = [ '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-syntax-decorators',{"decoratorsBeforeExport": true}] 
];

module.exports = { presets, plugins };