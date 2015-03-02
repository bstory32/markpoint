//client
if (Meteor.isClient) {
	Template.contactPage.helpers({
		contactPageSchema: function() {
			return Schema.contact;
		}
	});
}