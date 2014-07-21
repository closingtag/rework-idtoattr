rework ID to Attribute
===============

A [Rework](https://github.com/reworkcss/rework) plugin to convert CSS ID-Selectors to Attribute-Selectors.

## Installation

Install with npm:

```
npm install --save-dev rework-idtoattr
```

## Example

```js

  var rework = require('rework');
  var plugin = require('./plugin.js');

  var read = require('fs').readFileSync;
  var write = require('fs').writeFileSync;

  var css = rework(read('source.css', 'utf8')).use(plugin).toString();

  write('output.css', css);
```

### source.css

```css
#button ul ~ p {
  padding: 0;
}

#searchbar {
  border: 0;
}

div#test >ul.nav #login {
  width: auto;
  height: 100px;
}
```

### output.css

```css
[id="button"] ul ~ p {
  padding: 0;
}

[id="searchbar"] {
  border: 0;
}

div[id="test"] >ul.nav [id="login"] {
  width: auto;
  height: 100px;
}
```