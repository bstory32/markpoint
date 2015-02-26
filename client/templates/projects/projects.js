
Template.projectsTemp.rendered=function() {
  $('#sortProjects').mixItUp();
}
Template.projectsTemp.destroyed=function() {
  $('#sortProjects').mixItUp('destroy',true);
}