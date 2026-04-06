

// function search(data, query) {
//     let isPresent = false
//     data.forEach(x => {
//         if(x === query) {
//             isPresent = true
//         }
//     })
//     return isPresent
// }

const data = [2, 3, 5, 6 ,7];
function search(data, query) {
    if (!Array.isArray(data)) return [];

    return data.filter(item => {
        if (typeof item === "object" && item !== null) {
               return Object.values(item)
                .join(" ")
                .toLowerCase()
                .includes(String(query).trim().toLowerCase());
        } else {
            return String(item).includes(String(query).trim());
        }
    });
}

const result = search(data, 7);
console.log(result)