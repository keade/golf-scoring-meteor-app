// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players."

Players = new Meteor.Collection("players");

if (Meteor.is_client) {
  Template.leaderboard.players = function () {
    return Players.find({}, {sort: {name: 1}});
  };

  Template.leaderboard.selected_name = function () {
    var player = Players.findOne(Session.get("selected_player"));
    return player && player.name;
  };

  Template.player.selected = function () {
    return Session.equals("selected_player", this._id) ? "selected" : '';
  };

  Template.leaderboard.events({
    'click button.inc': function () {
      Players.update(Session.get("selected_player"), {$inc: {score: 1}});
    }
  });

  Template.leaderboard.events({
	'click button.dec': function () {
	  Players.update(Session.get("selected_player"), {$inc: {score: -1}});
	}
  });

  Template.new_player.events = {
    'click button.add': function () {
      var new_player_name = document.getElementById("new_player_name").value;
      Players.insert({name: new_player_name, score: 0});
    }
  };

  Template.player.events = {
    'click button.delete': function () { // <-- here it is
      Players.remove(this._id);
    },
    'click': function () {
      Session.set("selected_player", this._id);
    }
  };

  Template.player.events({
    'click': function () {
      Session.set("selected_player", this._id);
    }
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.is_server) {
  Meteor.startup(function () {
    if (Players.find().count() === 0) {

      for (var i = 0; i < names.length; i++)
        Players.insert({name: names[i], score: Math.floor(Math.random()*10)*5});
    }
  });
}
