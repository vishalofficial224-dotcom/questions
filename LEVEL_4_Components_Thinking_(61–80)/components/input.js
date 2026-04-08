

export function takeInput({
    id = '',
    className = '',
    type = '',
    placeholder = '',
    value = '',
    onInput = null
} = {}) {
    const input = document.createElement('input');
    
    input.id = id;
    input.className = className;
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;

    // ✔ connect UI → logic
    // ✔ build search bars
    // ✔ validate forms
    // ✔ trigger APIs
    // ✔ update UI dynamically


    if(onInput) {
        input.addEventListener("click", onInput);
    }
    
    return input;
}