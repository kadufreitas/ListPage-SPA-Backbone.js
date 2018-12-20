var search = Backbone.View.extend({
  tagName: 'form',
  className: 'text-left',
  id: 'search',
  attributes: {
    action: 'VeterinariansCollection',
    method: 'GET'
    },
  events: {
      'submit' : 'searchVeterinary',
      'click #clearSearch' : 'clearSearch'
  },
  initialize: function () {
      _.bindAll(this, 'render', 'searchVeterinary')
      this.template = $('#search-form').html()
  },
  render: function () {
      $.get("js/templates/form.template.html", function(html) {
        var rendered = Mustache.render(html)
        this.$el.html(rendered)
        this.nameInput = this.$el.find('#veterinary-name')
      }.bind(this))
  },
  //Funçao para fazer a busca na lista de veterinarios
  //Caso o valor da busca seja nulo, trazer apenas 10
  searchVeterinary: function (e) {    
    e.preventDefault()    
    if (this.nameInput.val() === '') {
      veterinarians.search([{query:'q',value:this.nameInput.val()},{query:'_limit',value:10}])
      $('#navegate').show()
    }else{
      veterinarians.search([{query:'q',value:this.nameInput.val()}])
      //Como não a limitação no retorno de um busca a páginção fica desativada
      $('#navegate').hide()
    }
  },
  //Função limpeza do input e chamada default com limit 10
  clearSearch: function () {
    veterinarians.search([{ query:'q',value:''},{query:'_limit',value:10}])
    this.nameInput.val('');    
    this.nameInput.value = ''     
    $('#navegate').show()
  }
})