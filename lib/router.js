Router.configure({
	layoutTemplate: 'mainNav',
	contactTemplate: 'contactForm',
	projectsTemplate: 'projectsPage',
	servicesTemplate: 'servicesPage',
	teamTemplate: 'teamPage',
	projectLoginTemplate: 'projectLogin',
	careerTemplate: 'careerPage',
	aboutusTemplate: 'aboutUsPage',
	technologiesTemplate: 'technologiesPage',
});
Router.route('/', {name: 'homeBody'});
Router.route('contact', {name: 'contactForm'});
Router.route('projects', {name: 'projectsPage'});
Router.route('services', {name: 'servicesPage'});
Router.route('team', {name: 'teamPage'});
Router.route('projectLogin', {name: 'projectLogin'});
Router.route('career', {name: 'careerPage'});
Router.route('aboutUs', {name: 'aboutUsPage'});
Router.route('technologies', {name: 'technologiesPage'});