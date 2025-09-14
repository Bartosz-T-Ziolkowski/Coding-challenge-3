// Coding Challenge 3a

// Code goes here

// Step 2: Create customer records

let customers = [
    {
        name: "Jack",
        email: "Jack@example.com",
        purchases: ["pens", "pencils", "erasers"]
    },
    {
        name: "Mary",
        email: "Mary@example.com",
        purchases: ["cups", "plates", "spoons"] 
    },
    {
        name: "Sue",
        email: "Sue@example.com",
        purchases: ["apples","oranges", "mangos"],
    }
]
// Current customer summary

customers.forEach(obj =>console.log(`name: ${obj.name} | email: ${obj.email} | purchases: ${obj.purchases}`));

// Step 3: Add and remove data

newObject = {name:"Raiden", email:"Raiden@example.com", purchases:["boxes", "spy gear", "carbon fiber armor"]};
customers.push(newObject);
customers.shift();
console.log(customers);

// Update customer info

customers[1]["email"] = "Sueanne@example.com";
console.log(customers);
customers[1].purchases.push("forks");
console.log("Mary's purchases: " + customers[1].purchases);

//

customers.forEach(obj =>console.log(`name: ${obj.name} | email: ${obj.email} | purchases: ${obj.purchases.length}`));