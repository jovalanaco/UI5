sap.ui.define([
    "sap/ui/core/ComponentContainer"

], function (ComponentContainer) {
    "Use strict";
    new ComponentContainer({
        name: "sap.ui.demo.walkthrough",
        settings: {
            id: "walkthrough"
        },
        async: true
    }).placeAt("content");
});
