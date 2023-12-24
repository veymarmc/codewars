/**
 * https://www.codewars.com/kata/65781071e16df9dcbded1520/train/javascript
 * @param {object} familyTree a node of a member family with references to other nodes that are it children.
 */
function teknonymize(familyTree) {
  doTeknonymize(familyTree);
}

function doTeknonymize(node) {
  if (node.children.length) {
    const elder = getElderOfChildren(node.children);
    node.teknomym = getTeknonym(elder);
    return elder;
  }

  return { node, level: 0 };
}

function getElderOfChildren(children) {
  children.reduce((elder, child) => {
    return compareElders(getElder(child), elder);
  }, { level: -1 });
}

function getElder(node) {
  if(node.children.length === 0) {
    return { node, level: 1 };
  }

  return doTeknonymize(node);
}

function compareElders() {

}