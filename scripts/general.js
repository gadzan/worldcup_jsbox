function fill0(num, n) {
  return (Array(n).join(0) + num).slice(-n);
}

module.exports = {
  fill0: fill0,
}