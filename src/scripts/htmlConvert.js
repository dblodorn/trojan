import unescape from 'lodash/unescape'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
	unescape: unescape
})

export default string => _.unescape(string)