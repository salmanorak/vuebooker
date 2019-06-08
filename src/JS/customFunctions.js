Date.prototype.isDate = function () {
  return !!((this !== "Invalid Date" && !isNaN(this)));
}
