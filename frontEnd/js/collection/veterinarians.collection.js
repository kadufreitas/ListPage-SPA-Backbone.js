var VeterinariansCollection = Backbone.Collection.extend({
    url: 'http://localhost:3000/veterinary',
    model: VeterinaryModel,
    comparator: function (VeterinaryModel) {
        return VeterinaryModel.get('name');
    },
    search: function (filter) {
        //fullQuery vai aglutinar os valores passados para a função
        var fullQuery = {}
        for (let i = 0; i < filter.length; i++) {
            switch (filter[i].query) {
                case 'q':
                    fullQuery.q = filter[i].value
                    break;
                case '_limit':
                    fullQuery._limit = filter[i].value
                    break;            
                default:
                    break;
            }
        }
            this.fetch({
                data: fullQuery,
                error: function () {
                    window.alert(':/ Ocorreu um erro com nosso sistemas. Por favor, tente mais tarde.');
                }
            })
    },
    parse: function (response) {
        return response
    },
    getNumTotal: function () {
        
    }
})

var veterinarians = new VeterinariansCollection()

//Código usado para gerar um db randomico com base em um Json

// var listNames = [{ json... }]
// var listModels = []
// for (let i = 0; i < listNames.length; i++) {
//     var aux = new VeterinaryModel({
//         name: listNames[i].name,
//         description: listNames[i].description
//     });
//     listModels.push(aux)
// }

// //console.log(listModels);
// for (let i = 0; i < listModels.length; i++) {
//     veterinarians.create(listModels[i]);        
// }

