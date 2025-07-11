// Centered Hash Pyramid

let numberOfRows = 5;

for (let i = 1; i <= numberOfRows; i++) {
    let spaces = '';
    let hash = '';

    // Spaces: decrease as rows increase
    for (let j = 1; j <= numberOfRows - i; j++) {
        spaces += ' ';
    }

    // Hashes: increase with rows (odd numbers)
    for (let k = 1; k <= 2 * i - 1 ; k++) {
        hash += '#';
    }

    console.log(spaces + hash);
}

//Centered Hash pyramid with prompt

// let numberOfRows2 = parseInt(prompt("Enter the number of pyramid rows:"));

// for (let i = 1; i <= numberOfRows2; i++) {
//     let spaces = '';
//     let hash = '';

//     // Create decreasing spaces
//     for (let j = 1; j <= numberOfRows2 - i; j++) {
//         spaces += ' ';
//     }

//     // Create increasing hashes
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         hash += '#';
//     }

//     console.log(spaces + hash);
// }
