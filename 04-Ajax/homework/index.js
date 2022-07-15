$("#boton").click(()=>{
    $.get("//localhost:5000/amigos", respuesta => {
        let lista = $("#lista");
        lista.empty();
        for(let i = 0; i<respuesta.length ; i++){
            let li = `<li>${respuesta[i].name}</li>`;
            lista.append(li);
        }
    });
});

$("#search").click(() => {
    let inputValue = $("#input").val();
    $.get(`http://localhost:5000/amigos/${inputValue}`, respuesta =>{
        $("#amigo").text(respuesta.name);
    });
});

$("#delete").click(() => {
    let inputValue = $("#inputDelete").val();
    $.ajax({
        url: `http://localhost:5000/amigos/${inputValue}`,
        type: `delete`,
        success: () => {
            $("#success").text("El amigo fue borrado con exito");
        }
    });
});
