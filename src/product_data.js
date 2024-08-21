/**
 * Den ska ha egenskaperna: EAN (string), name (string), description (string), stock (number) och price (number).
 */

const names = ["Screwdriver", "Hammer", "Drill", "Saw", "Wrench", "Tape measure", "Pliers", "Chisel", "Level", "Angle grinder"];
const postFixes = ["", "Pro", "Air", "Max", "Mini", "Lite", "Ultra", "Super", "Turbo", "Extreme"];

const generateDescription = (name) => {
    return `The ${name} is a tool that is used for ${name.toLowerCase()}ing.`;
}

const generateEAN = () => {
    return Math.floor(Math.random() * 1000000000000).toString();
}

const generateStock = () => {
    return Math.floor(Math.random() * 5);
}   

const generatePrice = () => {
    return Math.floor(Math.random() * 1000);
}

const generateProductData = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const postFix = postFixes[Math.floor(Math.random() * postFixes.length)];
    const fullName = `${name} ${postFix}`;
    const description = generateDescription(fullName);
    const EAN = generateEAN();
    const stock = generateStock();
    const price = generatePrice();
    return {EAN, name: fullName, description, stock, price};
}


export {generateProductData};