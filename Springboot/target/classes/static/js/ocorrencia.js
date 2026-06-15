document.addEventListener("DOMContentLoaded", () => {

    const status = document.getElementById("status");
    const bloco = document.getElementById("blocoSolucao");

    function atualizarCampos() {

        if (status.value === "CONCLUIDA") {
            bloco.style.display = "block";
        } else {
            bloco.style.display = "none";
        }

    }

    // padrão: oculto
    bloco.style.display = "none";

    // status padrão
    status.value = "ABERTA";

    status.addEventListener("change", atualizarCampos);

});