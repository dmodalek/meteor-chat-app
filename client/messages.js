/**
* Messages
*/

Template.messages.helpers({
    messages: function() {
        return Messages.find({}, { sort: { time: -1}});
    },
})

Template.registerHelper("formatTime", function(timestamp) {
    return moment(new Date(timestamp)).startOf('minute').fromNow();
});