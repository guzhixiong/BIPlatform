define(["template","dialog","common/float-window","report/edit/setting/main-model","report/edit/setting/show-data-template","report/edit/setting/ind-menu-template","report/edit/setting/dim-group-menu-template","report/edit/setting/data-model-menu-template"],function(a,b,c,d,e,f,g,h){return Backbone.View.extend({events:{"click .j-icon-data-sources":"setDataModel","click .j-method-type":"setInd","click .j-edit-dim-name":"editDimName","click .j-delete-sub-dim":"deleteSubDim","click .j-edit-dim-group":"editDimGroup","click .j-add-dim-group-btn":"addDimGroupSwitchToInput","keyup .j-add-dim-group-input":"addDimGroup","focusout .j-add-dim-group-input":"addDimGroupSwitchToBtn","click .j-setting-derive-inds":"settingDeriveInds","click .j-setting-dim-group":"settingDimGroup"},initialize:function(a){this.model=new d({id:this.id,parentModel:a.parentView.model}),this.parentView=a.parentView},rename:function(a,c){function d(a){return""===a?(b.alert("名称不能为空"),void 0):a==i.caption?(e(a),void 0):(g.model.putName(h,a,f,function(){i.caption=a,e(a)}),void 0)}function e(a){if(m.remove(),"dim-group"==c){j.show().html(a);var b=".j-con-comp-setting [data-id="+i.id+"]";$(b).find(".j-item-text").html(a)}else{var d=a+"（"+i.name+"）";$("[data-id="+i.id+"]").find(".j-item-text").show().html(d),g.parentView.model.loadDimList()}}if(!(a.find(".j-rename-input").length>0)){var f="dim-group"==c?"dim":c,g=this,h=a.attr("data-id"),i=this.parentView.model.getItemDataById(h,f),j=a.find(".j-item-text"),k=j.width()-20,l="rename-input j-rename-input",m=$('<input type="text" class="'+l+'">');m.width(k).val(i.caption),j.hide().before(m),m.focus(),m.keyup(function(a){if(13==a.keyCode){var b=m.val().trim();d(b)}}),m.blur(function(){var a=m.val().trim();d(a)})}},setDataModel:function(a){var b=this;if(this.dataModelMenu)return this.showDataModelMenu(a),void 0;this.dataModelMenu=new c({content:h.render()}),this.setDataModel=this.showDataModelMenu;var d=$(this.dataModelMenu.el);d.find(".j-show-data").click(function(){b.openSettingShowDataDialog(),d.hide()}),d.find(".j-change-data-sources").click(function(){require(["report/dim-set/view"],function(a){d.hide(),b.parentView.destroy(),window.dataInsight.main=new a({el:$(".j-main"),id:b.id})})}),this.showDataModelMenu(a)},openSettingShowDataDialog:function(){var a=this;this.model.loadShowData(function(c){b.showDialog({dialog:{height:300,width:435,buttons:{"提交":function(){var b=$(this);a.submitShowData(b,function(){b.dialog("close")})},"取消":function(){$(this).dialog("close")}}},content:e.render(c.data),title:"筛选显示数据"})})},submitShowData:function(a,b){var c,d=this,e={oriInd:[],oriDim:[]};for(var f in e)a.find(".j-"+f+" input").each(function(){c={id:$(this).val(),selected:"checked"==$(this).attr("checked")?1:0},e[f].push(c)});e.oriInd=JSON.stringify(e.oriInd),e.oriDim=JSON.stringify(e.oriDim),d.model.submitSowData(e,b)},showDataModelMenu:function(a){var b=$(a.target);this.dataModelMenu.show(b)},setInd:function(a){var b=this,d=$(a.target).parents(".j-root-line");if(b.id=d.attr("data-id"),this.indMenu)return this.showIndMenu(a),void 0;this.indMenu=new c({content:f.render()}),this.setInd=this.showIndMenu;var e=$(this.indMenu.el);e.find(".j-method-type").click(function(){var a,c=b.model.get("activeInd"),a=$(this).attr("data-value");b.model.putAggregator(b.parentView,c,a,function(a){var d=b.parentView,e=".j-root-line";e+="[data-id="+c.id+"]";var f=d.$el.find(e);f.find(".j-method-type").html(a)}),e.hide()}),e.find(".j-rename").click(function(){var a=".j-data-sources-setting-con-ind .j-root-line[data-id="+b.id+"]";b.rename(b.$el.find(a),"ind"),e.hide()}),this.showIndMenu(a)},showIndMenu:function(a){var b=$(a.target),c=b.parents(".j-root-line").attr("data-id"),d=$(this.indMenu.el).find(".j-method-type"),e=this.parentView.model.getItemDataById(c,"ind");this.model.set("activeInd",e),d.each(function(a,b){var c=$(b);c.attr("data-value")==e.aggregator?c.addClass("selected"):c.removeClass("selected")}),this.indMenu.show(b)},editDimName:function(a){var b=$(a.target).parents(".j-root-line");this.rename(b,"dim")},deleteSubDim:function(a){var c=this;b.confirm("是否确定删除？",function(){var b=$(a.target).parents(".j-root-line"),d=b.parents(".j-dim-group"),e=d.attr("data-id");c.model.deleteSubDim(e,b.attr("data-id"),function(){b.remove()})})},editDimGroup:function(a){var d=this;if(this.dimGroupMenu)return this.showDimGroupMenu(a),void 0;this.dimGroupMenu=new c({content:g.render()});var e=$(this.dimGroupMenu.el);e.find(".j-rename").click(function(){var a=d.model.get("activeDimGroup"),b=".j-data-sources-setting-con-dim .j-group-title[data-id="+a.id+"]";d.rename(d.$el.find(b),"dim-group"),e.hide()}),e.find(".j-delete").click(function(){var a=d.model.get("activeDimGroup"),c=".j-data-sources-setting-con-dim .j-dim-group[data-id="+a.id+"]",f=d.$el.find(c);b.confirm("是否确定删除？",function(){d.model.deleteDimGroup(f.attr("data-id"),function(){f.remove()})}),e.hide()}),this.showDimGroupMenu(a)},showDimGroupMenu:function(a){var b=$(a.target),c=b.parents(".j-group-title").attr("data-id"),d=this.parentView.model,e=d.getItemDataById(c,"dim");this.model.set("activeDimGroup",e),this.dimGroupMenu.show(b)},addDimGroupSwitchToInput:function(a){var b=$(a.target).hide();b.next().show()},addDimGroupSwitchToBtn:function(a){var b=$(a.target);""===b.val()&&(b.hide(),b.prev().show())},addDimGroup:function(a){var c=this;if(13==a.keyCode){var d=$(a.target),e=d.val().trim();if(""===e)return b.alert("名称不能为空"),void 0;c.model.createDimGroup(e,function(){c.model.loadDimList()})}if(27==a.keyCode){var f=$(a.target).hide();f.prev().show()}},settingDeriveInds:function(){var a=this;a.deriveInds?a.deriveInds.openDialog():require(["report/edit/setting/derivative-ind-mgr/mgr-view"],function(b){var c=new b({currentCubeId:a.getCurrentCubeId()});a.deriveInds=c,a.settingDeriveInds()})},settingDimGroup:function(){var a=this;a.dimGroupMgrView?a.dimGroupMgrView.openDialog():require(["report/edit/setting/dim-group-mgr/mgr-view"],function(b){var b=new b({settingView:a.parentView});a.dimGroupMgrView=b,a.settingDimGroup()})},getCurrentCubeId:function(){var a=$(".j-cube-select",this.el).val();if(a)return a;throw new Error("当前cubId不可识别")},destroy:function(){this.model.clear({silent:!0}),this.stopListening(),this.$el.unbind().empty()}})});