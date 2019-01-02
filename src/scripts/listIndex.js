import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  find: find,
  findIndex: findIndex
})

export default (currentIndex, list) => {
  const returnIndex = () => _.findIndex(list, {
    index: currentIndex,
  });
  const listItem = returnIndex();
  const prevItem = (listItem, listItemCount) => {
    if (listItem === 0) {
      return listItemCount - 1;
    } else {
      return listItem - 1;
    }
  };
  const nextItem = (listItem, listItemCount) => {
    if (listItem === (listItemCount - 1)) {
      return 0;
    } else {
      return listItem + 1;
    }
  };
  return {
    current_index: listItem,
    prev: prevItem(listItem, listItems.length),
    next: nextItem(listItem, listItems.length),
    list_count: listItems.length,
  };
};