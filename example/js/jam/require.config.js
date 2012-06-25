var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
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