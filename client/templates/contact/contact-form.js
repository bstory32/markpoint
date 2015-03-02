
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
