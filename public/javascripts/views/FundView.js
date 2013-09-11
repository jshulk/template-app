define(["backbone", "tpl!templates/fund.tmpl"], function(Backbone, fundTemplate){
	return Backbone.View.extend({
			tagName: "li",
			render: function(){

				this.$el.html(fundTemplate({fund:this.model}));
				return this;
			}
		});
});