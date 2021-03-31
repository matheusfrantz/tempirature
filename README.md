# tempirature

Monitor the core temperature of your Raspberry Pi.

## Usage

```js
const tempirature = require('tempirature');

tempirature.monitor(function(error, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('It is ' + response + ' °C');
    }
});
```
