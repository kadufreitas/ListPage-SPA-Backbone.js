var listVeterinary = Backbone.View.extend({
    tagName: 'div',
    className: 'veterinary',
    events: {
        'click': 'viewDetails'
    },
    initialize: function () {
        _.bindAll(this, 'render', 'viewDetails')
        //this.model.on('change', this.render)
    },
    viewDetails: function (e) {
        //Pegando o ID do model
        var veterinaryID = this.model.attributes.id                 
        //Passando para a pagina description/:id
        router.navigate('description/' + veterinaryID, {trigger: true})
        e.preventDefault()
    },
    render: function () {
        $.get("../js/templates/listVeterinary.template.html", function(html) {
            var rendered = Mustache.render(html, this.model.toJSON())
            this.$el.html(rendered)
        }.bind(this))
        return this
    }
})