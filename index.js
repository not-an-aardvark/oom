var a = [];
while (true) {
  a = [cloneDeep(a), cloneDeep(a)];
}

function cloneDeep (array) {
  return array.map(cloneDeep);
}
