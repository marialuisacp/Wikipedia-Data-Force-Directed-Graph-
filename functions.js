function vis_by_type(type) {
  switch (type) {
    case "circle": return keyc;
    case "square": return keys;
    case "triangle-up": return keyt;
    case "diamond": return keyr;
    case "cross": return keyx;
    case "triangle-down": return keyd;
    default: return true;
  }
}

function vis_by_node_score(score) {
  if (isNumber(score)) {
    if (score >= 0.666)
      return keyh;
    else if (score >= 0.333)
      return keym;
    else if (score >= 0)
      return keyl;
  }
  return true;
}

function vis_by_link_score(score) {
  if (isNumber(score)) {
    if (score >= 0.666)
      return key3;
    else if (score>=0.333)
      return key2;
    else if (score>=0)
      return key1;
  }
  return true;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
} 