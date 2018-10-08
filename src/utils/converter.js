const arrayToObject = (array = [], keyField = 'id') => (
  array.reduce((obj, item) => {
    obj[item[keyField]] = item
    return obj
  }, {})
)

export {
  arrayToObject
}
