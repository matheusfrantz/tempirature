var fs = require("fs");

exports.monitor = function () {
    var temperature = fs.readFileSync("/sys/class/thermal/thermal_zone0/temp");
    var celsius = temperature / 1000;

    return celsius;
};
