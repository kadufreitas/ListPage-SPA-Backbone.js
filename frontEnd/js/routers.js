var AppRouter = Backbone.Router.extend({
    el: '#app',
    routes: {
        "": "home",
        "description/:id": "description",
    },
    home: function () {
        $(this.el).html('')
        $('#form').html('')
        this.appView = new AppView()        
    },
    description: function (id) {        
        $('#form').html('')
        $('#navegate').empty()
        $(this.el).html('')
        var veterinary = veterinarians.get(id)
        var veterinaryDescription = new DescriptionView({
            model: veterinary
        });
        veterinaryDescription.render()        
    }
})
var router = new AppRouter()
Backbone.history.start({pushState: true});