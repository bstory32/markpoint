//server
if (Meteor.isServer) {
  // Meteor.startup(function () {
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
      to: "neil.a.sammons@gmail.com",
      from: doc.email,
      subject: "Request For Proposal -  " + doc.name,
      text: text
    });

  }
});
  // });
}