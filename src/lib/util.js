var proto = {
  importStyles: function (node) {
    var string = {}; 

    if (!node) return string;
    for (var i in node) {
      if (['string', 'number', 'boolean'].indexOf(this.type(node[i])) >= 0) {
        string[i] = node[i];
      }
    }
    return string;
  },
  type: function (obj) {
    var typeStr = Object.prototype.toString.call(obj);

    return typeStr.match(/\[object\s([^\]]+)\]/)[1].toLowerCase();
  },
  formatFontText: function (obj){
    var colors = obj.colors || [];
    obj.colors = colors.map(function (color) {
      color.length = 3;
      color = color.map(function (rgb) {
        return rgb.toString(16);
      });
      return '#' + color.join('')
    });
    return obj;
  },
  toString: function (obj, sp) {
    var keys;
    var kv;
    if (this.type(obj) === 'object') {
      keys = Object.keys(obj);
      kv = keys.map(function (k) {
        return k + ':' + obj[k];
      });
    }
    return kv;
  }
};

export default proto;
