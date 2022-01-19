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
                //console.log(oEvent.getSource().getCells());
                Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture.tutorial1.fragment.sayHelloDialog", this.onClose());
            },
            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            }

        });
    });