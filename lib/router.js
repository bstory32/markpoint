Router.configure({
	layoutTemplate: 'mainNav',
	contactTemplate: 'contactPage',
	projectsTemplate: 'projectsPage',
	servicesTemplate: 'servicesPage',
	teamTemplate: 'teamPage',
	projectLoginTemplate: 'projectLogin',
});
Router.route('/', {name: 'homeBody'});
Router.route('contact', {name: 'contactPage'});
Router.route('projects', {name: 'projectsPage'});
Router.route('services', {name: 'servicesPage'});
Router.route('team', {name: 'teamPage'});
Router.route('projectLogin', {name: 'projectLogin'});