var AppView = Backbone.View.extend({
    el: $('#app'),
    events: {
        "scroll": "scroll"
      },
    initialize: function () {
        //Bind da View com as funções, dando direito a elas de referenciar o this para a View
        _.bindAll(this, 'render', 'listAll', 'veterinaryInstance')
        //Bind dos eventos com o Collection, com esse bind assim que o evento de fetch() for chamado
        //vai desencadear outros que são chamados por padrão como no caso o reset() e sync() neste momento uma função de 
        //callback vai capturar esse evento e por meio de each() criar novas views do listVeterinary passondo 
        //os models trazidos no fetch
        veterinarians.bind('add', this.veterinaryInstance);
        veterinarians.bind('reset', this.listAll);
        veterinarians.bind('sync', this.render);
        veterinarians.fetch({
            data: {
                _page: 1
            },
            error: function () {
                window.alert(':/ Ocorreu um erro com nosso sistemas. Por favor, tente mais tarde.');
            }
        })                        
        this.searchform = new search()
        this.searchform.render()
        $('#form').append(this.searchform.el)

        this.navegate = new NavegateView()        
        setTimeout(function(){ this.navegate.render() }.bind(this), 2000);
    },
    render: function () {
        $('#error').html('')
        this.$el.empty()
        this.listAll();        
    },
    veterinaryInstance: function (VeterinaryModel) {        
        var view = new listVeterinary({
            model: VeterinaryModel
        })
        this.$el.append(view.render().el)
    },
    listAll: function () {     
        $('#error').html('')
        veterinarians.each(this.veterinaryInstance)
    }
}) 