function convert(str) {

  var toConvert = str.split('');

  for (var i = 0; i < toConvert.length; i++) {
    switch (toConvert[i]) {
      case '&':
        toConvert[i] = '&amp;';
        break;
      case '<':
        toConvert[i] = '&lt;';
        break;
      case '>':
        toConvert[i] = '&gt;';
        break;
      case '"':
        toConvert[i] = '&quot;';
        break;
      case "'":
        toConvert[i] = '&apos;';
        break;
    }
  }
  str = toConvert.join('');
  return str;
}

convert('Dolce & Gabbana')

