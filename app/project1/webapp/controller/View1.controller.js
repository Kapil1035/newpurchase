sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onPress:function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteHome");
            }
            // onSales:function() {
            //     const oRouter1 = this.getOwnerComponent().getRouter();
            //     oRouter1.navTo("RouteSales");
            // }
        });
    });
