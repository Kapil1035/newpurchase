sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("project1.controller.Home", {
        onInit: function() {
        },
        onGeneral:function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePurchase");
      },
      onHeader:function() {
        const oRouter1 = this.getOwnerComponent().getRouter();
        oRouter1.navTo("RouteHeader");
    },
    onItems:function() {
        const oRouter2 = this.getOwnerComponent().getRouter();
        oRouter2.navTo("RouteItems");
    }
      });
    }
  );
  