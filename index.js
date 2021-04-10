index={
    lista: [],

    init: function(){
        index.carregaJSON();
        document.getElementById("btnSearch").onclick = index.buscar;
        document.getElementById("search_value").addEventListener("keyup", function (event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.key === 'Enter') {
                event.preventDefault();
                index.buscar();
            }
        });
    },
    carregaJSON: function(){
        fetch("./tst.json")
            .then(res => res.json())
            .then(function (obj) {
                index.preencheTabela(obj.data);
                index.lista = obj.data;
            })
    },

    buscar: function () {
        var value = document.getElementById("search_value").value;
        var param = document.getElementById("search_param").value;
        var list;

        switch (param) {
            case "titulo":
                list = index.lista.filter(el => el.Titulo.toLowerCase().indexOf(value.toLowerCase()) > -1);
                break;
            case "autor":
                list = index.lista.filter(el => el.Autor.toLowerCase().indexOf(value.toLowerCase()) > -1);
                break;
            case "genero":
                list = index.lista.filter(el => el.Genero.toLowerCase().indexOf(value.toLowerCase()) > -1);
                break;
            /*case "editora":
                list = index.lista.filter(el => el.Editora.nomefantasia.toLowerCase().indexOf(value.toLowerCase()) > -1);
                break;*/
        }

        index.preencheTabela(list);
    },

    preencheTabela: function(dados){
        var tr="";
        for(var i=0; i<dados.length; i++){
            tr+="<tr>" +
            "<td>" + dados[i].Titulo + "</td>" +
            "<td>" + dados[i].Autor.substring(0, 20) + "</td>" +
            "<td>" + dados[i].Genero + "</td>" +
            "<td>" + dados[i].Preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "</td>" +
            "<td>" + dados[i].Preco_Feira.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "</td>" +
            "<td>Logo da Editora</td>" +
            "</tr>";
        }
        document.getElementById("bodytable").innerHTML = tr;
    }
}
index.init();