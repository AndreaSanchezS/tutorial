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

        return Controller.extend("accenture.tutorial1.controller.View3", {

            Formatter: Formatter,

            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel({name:"Clase Fiori"}), "ToolModel");
                this.getView().setModel(new JSONModel("../model/cities.json"), "CitiesModel");

            },

            onPress: function(oEvent){
                //var oToolsModel = this.getOwnerComponent().getModel("ToolModel");
                //console.log(oEvent.getSource().getBindingContext().sPath);

                var oModelNorthWind = this.getOwnerComponent().getModel();
                console.log(oEvent.getSource().getBindingContext().sPath);

                oModelNorthWind.read(oEvent.getSource().getBindingContext().sPath, {
                    urlParameters: {
                        "$expand": "Category, Order_Details, Supplier"
                    },
                    success: function (oData){
                        console.log(oData);
                        sap.ui.getCore().setModel(new JSONModel(oData), "DetailModel");
                        Common.navigateTo(this, "RouteView4");
                    }.bind(this)
                });

                //var row= oEvent.getSource().getCells();
                //oToolsModel.setProperty("/selectedCity", row[0].getText());
                
                //Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture.tutorial1.fragment.sayHelloDialog");
            }

        });
    });