
import { myButton } from "./button.js";
import { takeInput } from "./input.js";

export function search({items, onUpdate} = {}) {
    const div = document.createElement('div');
    const input = takeInput({placeholder:"search"});
    const button = myButton({onClick:takeButton2});

    div.appendChild(input);
    div.appendChild(button);

    function takeButton() {
        const value = input.value;
        const count = items.indexOf(value)
            if(count !== -1) {
                items.splice(count, 1)
            }
            onUpdate(items)
        
    }

    function takeButton2 () {
        const value = input.value;
        const fill = items.filter(x => x.includes(value))
        onUpdate(fill);
    }


    return div;
}