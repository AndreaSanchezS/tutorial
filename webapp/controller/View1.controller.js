sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "../utils/Validator",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, Validator, Common) {
        "use strict";

        return Controller.extend("accenture.tutorial1.controller.View1", {
            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel({name:"Clase Fiori"}), "ToolModel");

                this.getView().setModel(new JSONModel("../model/cities.json"), "CitiesModel");

            },

            onSayHello: function (oEvent) {
                /*
                MessageToast.show("Hello World!",{
                    duration: 3000,
                });
                 */
                
                if (!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())){
                    sap.m.MessageToast.show("Select a City", {
                        duration: 3000,
                    });
                    return;
                }
/*
                if( !this._dialogSayHello ) {
                    this._dialogSayHello = sap.ui.xmlfragment("idSayHelloDialog", "accenture.tutorial1.fragment.sayHelloDialog", this);
                    this.getView().addDependent(this._dialogSayHello);
                }
                this._dialogSayHello.open();
*/
                Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture.tutorial1.fragment.sayHelloDialog", this.onClose());
            },

            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },

            onNavigateToView2: function(){
                //var oRouter = this.getOwnerComponent().getRouter();
                //oRouter.navTo("RouteView2");
                Common.navigateTo(this, "RouteView2");
            },
            onNavigateToView3: function(){
                //var oRouter = this.getOwnerComponent().getRouter();
                //oRouter.navTo("RouteView2");
                Common.navigateTo(this, "RouteView3");
            }

        });
    });