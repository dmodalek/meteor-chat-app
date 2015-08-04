/**
* Add Message
*/

Template.add.events = {
	'keydown input#message, submit button#button' : function (event) {
		if (event.which == 13) { // 13 is the enter key event
			var name = document.getElementById('name');
			var message = document.getElementById('message');

			if (message.value != '') {
				Messages.insert({
					name: name.value,
					message: message.value,
					time: Date.now(),
				});

				document.getElementById('message').value = '';
				message.value = '';
			}
		}
	}
}