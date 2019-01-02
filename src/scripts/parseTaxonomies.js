import map from 'lodash/map';
import uniq from 'lodash/uniq';
import flattenDeep from 'lodash/flattenDeep';
import mixin from 'lodash/mixin';
import _ from 'lodash/wrapperLodash';

mixin(_, {
  map: map,
  uniq: uniq,
  flattenDeep: flattenDeep,
});

const uniqSubArray = (array, filterKey) =>
  _.uniq(_.flattenDeep(_.map(array, filterKey)));

export default (array, key, subKey) =>
  uniqSubArray(
    uniqSubArray(array, key)
    , subKey);
