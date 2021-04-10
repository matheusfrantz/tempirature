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

## Contribute

1. Fork it: `git clone https://github.com/matheusfrantz/tempirature.git`
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Check the build: `npm run build`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request :D
