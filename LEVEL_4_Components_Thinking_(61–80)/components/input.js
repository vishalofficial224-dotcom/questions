

export function takeInput({
    id = '',
    className = '',
    type = '',
    placeholder = '',
    value = '',
} = {}) {
    const input = document.createElement('input');
    
    input.id = id;
    input.className = className;
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    
    return input;
}