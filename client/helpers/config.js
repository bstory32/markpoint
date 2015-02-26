Accounts.ui.config({
	extraSignupFields: [{
		fieldName: 'Nickname',
		fieldLabel: 'Nickname',
		inputType: 'text',
		visible: true,
		saveToProfile: true
	},{
		fieldName: 'student',
		fieldLabel: 'I am a student',
		inputType: 'checkbox',
		visible: true,
		saveToProfile: true
	}]
});

i18n.map("en",{
  loginButtonsLoggedOutDropdown: {
    signIn: "PROJECT DASHBOARD LOGIN",
    up: ""
  }
});