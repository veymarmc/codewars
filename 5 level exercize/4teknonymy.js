/**
 * https://www.codewars.com/kata/65781071e16df9dcbded1520/train/javascript
 * @param {object} node a node of a member family with references to other nodes that are it children. (family three)
 */
function teknonymize(node) {
  if (node.children.length) {
    const descendantElder = node.children
      .reduce((elder, child) => compareElders(teknonymize(child), elder), { level: -1 });
    node.teknonym = getTeknonym(node, descendantElder);
    descendantElder.level++; // returning the recovered level plus the current level.
    return descendantElder;
  }

  return { node, level: 1 };
}

function compareElders(elder1, elder2) {
  if (elder1.level > elder2.level) {
    return elder1;
  } else if (elder2.level > elder1.level) {
    return elder2;
  } else {
    return elder1.node.dateOfBirth < elder2.node.dateOfBirth ? elder1 : elder2;
  }
}

function getTeknonym(node, descendantElder) {
  const genderConversion = {
    "m": "father",
    "f": "mother",
  };
  const seedTeckno = `${genderConversion[node.sex]} of ${descendantElder.node.name}`;

  return descendantElder.level === 1
    ? seedTeckno
    : Array(descendantElder.level - 2).fill(0).reduce((t) => `great-${t}`, `grand${seedTeckno}`);
}

const three = {
  "children": [
      {
          "children": [
              {
                  "children": [
                      {
                          "children": [
                              {
                                  "children": [
                                  ],
                                  "dateOfBirth": "1089-05-23T16:37:39.000Z",
                                  "name": "xnimdgjx",
                                  "sex": "m",
                                  "teknonym": ""
                              }
                          ],
                          "dateOfBirth": "1069-09-13T16:37:39.000Z",
                          "name": "ygejtvrp",
                          "sex": "m",
                          "teknonym": "father of xnimdgjx"
                      }
                  ],
                  "dateOfBirth": "1045-09-05T16:37:38.000Z",
                  "name": "rcxgaobu",
                  "sex": "m",
                  "teknonym": "grandfather of xnimdgjx"
              },
              {
                  "children": [
                      {
                          "children": [
                              {
                                  "children": [
                                  ],
                                  "dateOfBirth": "1095-08-18T16:37:39.000Z",
                                  "name": "aabuwrrc",
                                  "sex": "f",
                                  "teknonym": ""
                              },
                              {
                                  "children": [
                                  ],
                                  "dateOfBirth": "1088-02-28T16:37:39.000Z",
                                  "name": "bumajsit",
                                  "sex": "f",
                                  "teknonym": ""
                              }
                          ],
                          "dateOfBirth": "1068-04-07T16:37:39.000Z",
                          "name": "tpwdvkzt",
                          "sex": "f",
                          "teknonym": "mother of bumajsit"
                      }
                  ],
                  "dateOfBirth": "1047-12-12T16:37:39.000Z",
                  "name": "yvbyzuas",
                  "sex": "f",
                  "teknonym": "grandmother of bumajsit"
              }
          ],
          "dateOfBirth": "1025-09-12T16:37:38.000Z",
          "name": "svgbamdy",
          "sex": "m",
          "teknonym": "grandfather of bumajsit"
      },
      {
          "children": [
          ],
          "dateOfBirth": "1028-11-08T16:37:39.000Z",
          "name": "ckpjwdkg",
          "sex": "f",
          "teknonym": ""
      }
  ],
  "dateOfBirth": "1000-01-01T19:40:31.398Z",
  "name": "mjrvznzq",
  "sex": "m",
  "teknonym": "grandfather of bumajsit"
};

teknonymize(three);

console.log(three);
