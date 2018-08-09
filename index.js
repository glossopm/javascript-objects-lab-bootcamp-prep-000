var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var object2 = Object.assign({}, object, {[key]: value})
  return object2
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})
}
