window.addEventListener('load', () => {
    const form = document.getElementById('form');

    form.addEventListener("submit", function (e) {
        let thereAreErrors = false;
        const formFields = [...form.elements];
        formFields.pop();
        // console.log(formFields)
        formFields.forEach(oneField => {
            const spanTagError = oneField.nextElementSibling;
            if (oneField.value.trim() === "") {
                oneField.classList.add('border-red-600');
                spanTagError.innerText = `El ${oneField.placeholder} es obligatorio`;                
                thereAreErrors = true;
            } else {
                oneField.classList.remove('border-red-600');
                oneField.classList.add('border-green-600');
                spanTagError.innerText = "";
            }
        })
        if (thereAreErrors) {
            e.preventDefault();
        }
    })


})