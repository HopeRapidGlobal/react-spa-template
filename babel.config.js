module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 Chrome versions'],
        },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
