if (Meteor.isClient) {
	Template.contactForm.helpers({
		contactFormSchema: function() {
			return Schema.contact;
		}
	});
}