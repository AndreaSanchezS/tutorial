sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, Formatter) {
        "use strict";

        return Controller.extend("accenture.tutorial1.controller.View2", {

            Formatter: Formatter,

            onInit: function () {
                //this.getOwnerComponent().setModel(new JSONModel({name:"Clase Fiori"}), "ToolModel");
                this.getView().setModel(new JSONModel("../model/cities.json"), "CitiesModel");

            }

        });
    });