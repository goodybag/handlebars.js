var jam = {
    "packages": [
        {
            "name": "gb-crazier-alert",
            "location": "jam/gb-crazier-alert",
            "main": "lib/index.js"
        },
        {
            "name": "leFunc",
            "location": "jam/leFunc",
            "main": "lib/leFunc.js"
        },
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "less",
            "location": "jam/less",
            "main": "./dist/less-1.3.0.js"
        },
        {
            "name": "handlebars",
            "location": "jam/handlebars",
            "main": "lib/index.js"
        },
        {
            "name": "domReady",
            "location": "jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "amanda",
            "location": "jam/amanda",
            "main": "./releases/latest/amanda.js"
        },
        {
            "name": "gb-crazy-alert",
            "location": "jam/gb-crazy-alert",
            "main": "lib/index.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "jquery.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.1.0"
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages});
}
else {
    var require = {packages: jam.packages};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
};