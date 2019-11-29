/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const merge = require('webpack-merge')
const BASE_CONFIG = require('./webpack.config.base')
const DEV_SERVER = require('./modules/dev-server')
const CSS_LOADER = require('./modules/css-dev')
const DEV_TOOL = { devtool: 'inline-source-map' }

module.exports = merge(DEV_TOOL, BASE_CONFIG, CSS_LOADER, DEV_SERVER)
