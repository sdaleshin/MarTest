define(["app","entities/user","apps/users/list/list_view"],function(e){e.module("UserApp.List",function(e,t,n,r,i,s){e.Controller=r.Controller.extend({initialize:function(){var e=t.request("user:entities");t.execute("when:fetched",e,function(){this.layout=this.getLayoutView(),this.layout.on("show",function(){this.showTable(e)},this),t.mainRegion.show(this.layout)},this)},editUserEntity:function(e){t.navigate("users/"+e.model.id+"/edit",!0)},getLayoutView:function(){return new e.Layout},showPanel:function(e){panelView=this.getPanelView(e),this.layout.panelRegion.show(panelView)},getPanelView:function(t){return new e.Panel({collection:t})},showTable:function(){var e=this.getTableView(users);this.layout.tableRegion.show(e),this.listenTo(e,"itemview:edit:user:entity",this.editUserEntity)},getTableView:function(t){return new e.Users({collection:t})}})})});