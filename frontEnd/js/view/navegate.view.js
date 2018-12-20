//  CurrentPage funciona como contador para passagem das paginas
//Como não se tem o número máximo de páginas este contador 
//caminha até receber um valor nulo do servidor.
//  As funções Next e Prev fazem um novo fetch passando a pagina em currentPage
var currentPage = 1
var NavegateView = Backbone.View.extend({
    el: '#navegate',
    events:{
        'click .prev': 'prev',
        'click .next': 'next'
    },
    initialize: function () {
        _.bindAll(this, 'render')
    },
    render: function () {        
        $.get("../js/templates/navegate.template.html", function(html) { 
            var rendered = Mustache.render(html)
            $(this.el).html(rendered)
        }.bind(this))
    },
    next: function () {
        window.scrollTo(0, 0);
        $('#app').delay(350);
        veterinarians.fetch({
            data: {
                _page: ++currentPage
            },
            success: function(collection, response) {
                if(response == ''){
                    //Essa mensagem será exibida no caso onde o cliente chegou na ultima página da lista
                    $('#error').html('<h4>Nossa lista de Veterinarios terminou, se não encontrou quem você procurava tente nosso campo de busca.</h4>')
                    $('#navegate .next').hide()
                }
            },
            error: function () {
                window.alert(':/ Ocorreu um erro com nosso sistemas. Por favor, tente mais tarde.');
            }
        })
    },
    prev: function () {
        window.scrollTo(0, 0);
        $('#app').delay(350);
        veterinarians.fetch({
            add: true,
            data: {
                _page: (currentPage < 1) ? 1 : --currentPage
            },
            success: function(collection, response) {
                $('#navegate .next').show()
            },
            error: function () {
                window.alert(':/ Ocorreu um erro com nosso sistemas. Por favor, tente mais tarde.');
            }
        })
    }
})
