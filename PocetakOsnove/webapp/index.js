sap.ui.define([
    "sap/ui/core/mvc/XMLView"

], function (XMLView) {
    "Use strict";

    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then( function (oView){
        oView.placeAt("content");
    });
});
