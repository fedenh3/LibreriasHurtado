(async () => {
    const {value: formato} = await Swal.fire({
        title: 'Bienvenido',
        text: 'Escoge el formato buscado',
        icon: 'question',
        confirmButtonText: 'Seleccionar',
        footer: '<span> Información importante!',
        padding: '1rem',
        backdrop: true,
        position: 'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true,
        showConfirmButton: true,
        confimButtonAriaLabel: 'Confirmar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonAriaLabel: 'Cancelar',
    
    
        input: 'select',
        inputPlaceholder: 'Formato' ,
        inputValue: '',
        inputOptions: {
            jpg: 'jpg',
            gif: 'gif',
            png: 'png'
        }
        
       
    });

    if (formato){
        alert('Excelente elección!!');
    }
})()





