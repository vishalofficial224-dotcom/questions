

export function myCard({
    cardText = "new card",
    className = "",
    height = "200px",
    width = "200px",
    border = "2px solid black",
    margin = "20px"
} = {}) {

    const card = document.createElement('div');

    card.innerHTML = cardText;
    card.className = className;
    card.style.height = height;
    card.style.width = width;
    card.style.border = border;
    card.style.margin = margin;

    return card;

    
}