const changeParts = (value) => {
    const enderecoContainer = document.getElementById("endereco-container");
    const horarioContainer = document.getElementById("horario-container");
    const dataHoraContainer = document.getElementById(
        "data-hora-container"
    );
    const horariosFuncionamentoContainer = document.getElementById(
        "horarios-funcionamento"
    );
    const envioBtn = document.getElementById("envio");

    if (value === "entrega") {
        enderecoContainer.style.display = "block";
        horarioContainer.style.display = "block";
        dataHoraContainer.style.display = "block";
        horariosFuncionamentoContainer.style.display = "none";
        envioBtn.disabled = false;
    } else if (value === "retirada") {
        enderecoContainer.style.display = "none";
        horarioContainer.style.display = "none";
        dataHoraContainer.style.display = "block";
        horariosFuncionamentoContainer.style.display = "block";
        envioBtn.disabled = false;
    } else {
        enderecoContainer.style.display = "none";
        horarioContainer.style.display = "none";
        dataHoraContainer.style.display = "none";
        horariosFuncionamentoContainer.style.display = "none";
        envioBtn.disabled = true;
    }
};
const main = () => {
    document
        .getElementById("servico")
        .addEventListener("change", function () {
            changeParts(this.value);
        });
    changeParts("");
}

document.addEventListener('DOMContentLoaded', main);