/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
    activeRouteClass: function(routeName) {
        var current = Router.current();
        var active = current && current.route.name == routeName;
        return active && 'active';
    }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
