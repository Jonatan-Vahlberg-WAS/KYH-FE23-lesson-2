
const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jane", "Kevin", "Linda", "Michael", "Nancy", "Oliver", "Pamela", "Quincy", "Rachel", "Steve", "Tina", "Ulysses", "Victoria", "Walter", "Xena", "Yvonne", "Zach"];

const lastNames = ["Adams", "Baker", "Clark", "Davis", "Edwards", "Franklin", "Garcia", "Hernandez", "Ivanov", "Johnson", "Khan", "Lee", "Martinez", "Nguyen", "O'Connor", "Patel", "Quinn", "Rodriguez", "Smith", "Taylor", "Umarov", "Vasquez", "Williams", "Xu", "Yilmaz", "Zhang"];

const addresses = [
    "1234 Elm St",
    "5678 Oak St",
    "91011 Pine St",
    "1213 Maple St",
    "1415 Cedar St",
    "1617 Birch St",
    "1819 Spruce St",
    "2021 Ash St",
    "2223 Walnut St",
    "2425 Chestnut St",
    "2627 Poplar St",
    "2829 Pine St",
    "3031 Elm St",
    "3233 Oak St",
    "3435 Maple St",
    "3637 Cedar St",
    "3839 Birch St",
    "4041 Spruce St",
    "4243 Ash St",
    "4445 Walnut St",
    "4647 Chestnut St",
    "4849 Poplar St",
    "5051 Pine St",
    "5253 Elm St",
    "5455 Oak St"
    ];

const generatePhoneNumber = () => {
    const areaCode = Math.floor(Math.random() * 1000);
    const prefix = Math.floor(Math.random() * 1000);
    const lineNumber = Math.floor(Math.random() * 10000);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
}

const jobTitles = ["Accountant", "Barista", "Chef", "Dentist", "Engineer", "Firefighter", "Graphic Designer", "Hair Stylist", "IT Specialist", "Journalist", "Kindergarten Teacher", "Lawyer", "Musician", "Nurse", "Office Manager", "Photographer", "Quality Assurance Specialist", "Receptionist", "Software Developer", "Teacher", "Underwriter", "Veterinarian", "Writer", "X-ray Technician", "Yoga Instructor", "Zoologist"];

const generatePersonData = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    const phoneNumber = generatePhoneNumber();
    return {firstName, lastName, address, phone: phoneNumber};
}


const generateEmployeeData = () => {
    const personData = generatePersonData();
    const jobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    const id = Math.floor(Math.random() * 1000000);
    const hasKeys = Math.random() > 0.5;
    return {...personData, jobTitle, id, hasKeys};
}

export {generatePersonData, generateEmployeeData};