const buttonAbrirModal = document.querySelector("#button-abrir-modal");

const buttonCerrarModal = document.querySelector("#button-cerrar-modal");

const dialogModal = document.querySelector("#dialog-modal");

buttonAbrirModal.addEventListener("click",()=>{

    //dialogModal.show();
    dialogModal.showModal();
})

buttonCerrarModal.addEventListener("click",()=>{

    dialogModal.close();
})

