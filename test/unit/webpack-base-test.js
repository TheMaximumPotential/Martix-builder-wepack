const assert = require('assert')

describe('webpack.base.js test case', () => {
	const baseConf = require('../../lib/webpack.base')
	it('entry', () => {
		assert.equal(
			baseConf.entry.index,
			'G:/builder-webpack/test/smoke/template/src/index/index.js'
		)
		assert.equal(
			baseConf.entry.search,
			'G:/builder-webpack/test/smoke/template/src/search/index.js'
		)
	})
})
