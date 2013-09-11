define([
		"backbone", 
		"collections/FundCollection",
		"views/FundCollectionView"
		], function(Backbone, FundCollection, FundCollectionView){

	return {

		initialize: function(){
			var fundsData = 
			[	
				{
					fundName: "kiid",
					documents: {
						documentType: [
						{

							languages : [
									{
										doctype:"small",
										name:"eng"
									},
									{
										doctype:"medium",
										name:"fre"
									},
									{
										doctype:"medium",
										name:"eng"
									},
									{
										doctype:"large",
										name:"german"
									}
								] 
							

						}

					  ]
							
					}
				}

			];
			var funds = new FundCollection();

			var view = new FundCollectionView({collection : funds});

			funds.reset(fundsData);

		}
	};
});