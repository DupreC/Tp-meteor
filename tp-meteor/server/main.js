Meteor.startup
(
    function ()
    {
        // Populate once
        if ( !animal.find().count() )
        {}
    }
);
