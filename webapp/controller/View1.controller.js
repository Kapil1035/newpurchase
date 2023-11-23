sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var company_code="Mandatory";
        var Document_Type="Mandatory";
        var vendor="Mandatory";
        var language="Mandatory";
        var Purchase_Organization="Mandatory";
        var Purchase_Group="Mandatory";
        var Currency="Mandatory";
        var Start_Date="Mandatory";
        var End_Date="Mandatory";

        return Controller.extend("project3.controller.View1", {
            onInit: function () {

            },
            
            comCode:function(e){
                company_code=e.getSource().getSelectedButton().getText()
            //    console.log(company_code);
            },
            docType:function(e){
                Document_Type=e.getSource().getSelectedButton().getText()
            //    console.log(Document_Type);
            },
            vendor:function(e){
                vendor=e.getSource().getSelectedButton().getText()
            //    console.log(vendor);
            },
            language:function(e){
                language=e.getSource().getSelectedButton().getText()
            //    console.log(language);
            },
            purOrg:function(e){
                Purchase_Organization=e.getSource().getSelectedButton().getText()
            //    console.log(Purchase_Organization);
            },
            purGrp:function(e){
                Purchase_Group=e.getSource().getSelectedButton().getText()
            //    console.log(Purchase_Group);
            },
            Currency:function(e){
                Currency=e.getSource().getSelectedButton().getText()
            //    console.log(Currency);
            },
            strDate:function(e){
                Start_Date=e.getSource().getSelectedButton().getText()
            //    console.log(Start_Date);
            },
            endDate:function(e){
                End_Date=e.getSource().getSelectedButton().getText()
            //    console.log(End_Date);
            },
            
            submit:function(){
                var obj={
                    company_code:company_code,
                    Document_Type:Document_Type,
                    vendor:vendor,
                    language:language,
                    Purchase_Organization:Purchase_Organization,           
                    Purchase_Group:Purchase_Group,
                    Currency:Currency,
                    Start_Date:Start_Date,
                    End_Date:End_Date
                }
               
                const oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("RouteView3",{
                    invoicePath: window.encodeURIComponent(JSON.stringify(obj))
                })
            }

        });
    });
