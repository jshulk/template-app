define(["backbone", "views/FundView"], function(Backbone, FundView){
	return Backbone.View.extend({
		el: "#fundsList",
		initialize: function(){
			this.listenTo(this.collection, "reset", this.render);
		},
		render: function(){
			this.collection.each(this.addOne, this);
			return this;
		},
		addOne: function(fund){
			var view = new FundView({model:fund});
			this.$el.append(view.render().el);
		}
	})
})