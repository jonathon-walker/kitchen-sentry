/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('home', {
    path: '/',
    template: 'Home'
});


Router.route('sentries.index', {
    path: '/sentries',
    template: 'SentriesIndex'
});
