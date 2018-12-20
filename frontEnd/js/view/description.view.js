var DescriptionView = Backbone.View.extend({
    className: 'description',
    initialize: function () {
        _.bindAll(this, 'render')
        window.scrollTo(0, 0);
    },
    render: function () {
        //O uso do .bind() foi para que a função de chamada ajax podesse ter acesso
        //ao this referenciando a View, já que o this tem seu contexto mutavel 
        //com base em sua localização
        $.get("../js/templates/description-head.template.html", function(html) { 
            var rendered = Mustache.to_html(html, this.model.toJSON())
            $('#form').html(rendered)
            $('#backPage').on('click', this.backPage);
        }.bind(this))

        $.get("../js/templates/description-text.template.html", function(html) { 
            var rendered = Mustache.to_html(html, this.model.toJSON())
            $('#app').html(rendered)
        }.bind(this))
    },
    backPage: function () {
        router.navigate('', {trigger: true})
    }
})