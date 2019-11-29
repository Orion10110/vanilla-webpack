/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const utils = require('./utils')
const merge = require('dwebpack-merge')
const modules = require('./modules')
const path = require('path')

module.exports = merge({
  entry: path.resolve(__dirname, '..', 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, '..', ' dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [utils.resolve('src'), 'node_modules']
  }
},
modules)
