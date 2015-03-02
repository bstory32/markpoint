
Schema = {};
Schema.contact = new SimpleSchema({
  name: {
    type: String,
    label: "Your name",
    max: 50
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address"
  },
  message: {
    type: String,
    label: "Tell us about your project?",
    max: 1000
  },
  phone: {
    type: String,
    label: "Phone number"
  },
  company: {
    type: String,
    label: "Company"
  },
  product: {
    type: String,
    optional: true,
    autoform: {
      type: "select",
      options: function () {
        return [
        {label: "Any", value: "any"},
        {label: "Web Development", value: "Application"},
        {label: "Web Design", value: "Design"}
        ];
      }
    }
  }

});

//client
if (Meteor.isClient) {
  Template.contactPage.helpers({
    contactPageSchema: function() {
      return Schema.contact;
    }
  });
}



//server
if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
      sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.contact);

    // Build the e-mail text
    var text = "Name: " + doc.name + "\n\n"
    + "Email: " + doc.email + "\n\n"
    + "Company: " + doc.company + "\n\n"
    + "Phone: " + doc.phone + "\n\n"
    + "Product: " + doc.product + "\n\n"
    + doc.message;

    this.unblock();

    // Send the e-mail
    Email.send({
      to: "bstory32@gmail.com",
      from: doc.email,
      subject: "Request For Proposal -  " + doc.name,
      text: text
    });

  }
});
  });
}