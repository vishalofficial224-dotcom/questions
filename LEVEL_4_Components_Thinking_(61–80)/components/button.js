//Create Button() component


export function myButton({
    name = '',
    type = 'button',
    value = 'text',
    id = '',
    className = '',
    text = 'button',
    onClick = null

} = {}) {

    const button = document.createElement('button');

    button.name = name;
    button.type = type;
    button.id = id;
    button.value = value;
    button.className = className;
    button.innerHTML = text;


    button.addEventListener("click", onClick);

    return button;
}