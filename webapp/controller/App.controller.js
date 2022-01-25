sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("accenture.tutorial1.controller.App", {
            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel({name:"Clase Fiori"}), "ToolModel");
                this.getView().setModel(new JSONModel("../model/cities.json"), "CitiesModel");

                //console.log(_.defaults({'a': 1}, {'a':3, 'b':2 }));

                var oModelNorthWind = this.getOwnerComponent().getModel();
                oModelNorthWind.read("/Products", {
                    success: function (oData){
                        console.log(oData);
                    }
                });
            }
        });
    });
