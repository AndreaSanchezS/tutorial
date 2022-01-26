sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, Formatter, Common) {
        "use strict";

        return Controller.extend("accenture.tutorial1.controller.View4", {

            Formatter: Formatter,

            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteView4").attachPatternMatched( function () {
                    console.log(sap.ui.getCore().getModel("DetailModel").getData());
                    //console.log(sap.ui.getCore().getModel("DetailModel").getData());
                    const oDetailModel = sap.ui.getCore().getModel("DetailModel");
                    this.getView().setModel(oDetailModel, "DetailModel");  
                }, this);
            },

            onPicture: function(oEvent){
                Common.openDialogFromFragment(this, "idSayImage", "accenture.tutorial1.fragment.sayImage");
            }


        });
    });