define(["report/edit/canvas/chart-setting/cascade-select-setting-model","report/edit/canvas/chart-setting/cascade-setting/cascade-setting-view"],function(a,b){var c=Backbone.View.extend({events:{"click .j-set-axis":"setDoubleAxis"},initialize:function(c){this.model=new a({canvasModel:c.canvasView.model,reportId:c.reportId}),this.canvasView=c.canvasView,this.cascadeView=new b({el:this.el,reportId:this.model.get("reportId"),canvasView:this.canvasView})},destroy:function(){this.stopListening(),this.model.clear({silent:!0}),delete this.model,this.$el.unbind()}});return c});