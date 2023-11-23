sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("icontab.controller.View1", {
            onInit: function () {

            },
            onItems:function() {
                const oRouter2 = this.getOwnerComponent().getRouter();
                oRouter2.navTo("RouteView2");
            }
        });
    });
