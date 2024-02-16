sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        
            //JSON
            onInit : function () {
                var oData = {
                    recipient : {
                        name : "UI5"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
                //i18n model
                var i18nModel = new ResourceModel({
                    bundleName : "sap.ui.demo.walkthrough.i18n.i18n",
                    supportedLocales : [""],
                    fallbackLocale : ""
                });
                this.getView().setModel(i18nModel, "i18n")

            },
            onShowHello : function () {
            //read message i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg",[sRecipient]); //iz i18n get message
            //show message
            MessageToast.show(sMsg);
        }
    });
});