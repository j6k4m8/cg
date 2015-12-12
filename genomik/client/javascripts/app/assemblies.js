Template.assemblies_index.helpers({
    user_owned_assemblies: function() {
        return RawFastas.find({
            'owner': Meteor.userId()
        });
    },
});

Template.assembly_card.helpers({
    ownerName: function() {
        var o = Meteor.users.findOne(this.owner);
        return o.profile.first_name + " " + o.profile.last_name;
    },
    rawUrl: function() {
        this.url();
    }
});
