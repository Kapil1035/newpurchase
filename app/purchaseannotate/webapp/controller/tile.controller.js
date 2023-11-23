sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("purchaseannotate.controller.tile", {
            onInit: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteView2").attachPatternMatched(this.onObjectMatched, this);
            },
            onObjectMatched(oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath)
                });
            },
            navigatetosplit:function() {
            
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
            }
        });
    });
