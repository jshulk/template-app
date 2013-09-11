define(["backbone"], function(Backbone){
	
	return Backbone.Model.extend({

		groupLanguageByDocType: function(){
			var languages ;
			_.each(this.attributes.documents.documentType, function(docType){
				
				languages = _.groupBy(docType.languages, "doctype", this);

			}, this);

			return languages;
		}
	});
});