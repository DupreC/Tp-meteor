Router.configure({
    layoutTemplate: 'register'
});

Router.route('/1',{
    name: 'animal'
});

Router.route('../',{
    name: 'register'
});