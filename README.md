# tempirature

Monitor the core temperature of your Raspberry Pi.

## Usage

```js
const tempirature = require('tempirature');

tempirature.monitor(function(error, temperature) {
    if (error) {
        console.error(error);
    } else {
        console.log('It is ' + temperature + ' °C');
    }
});
```
