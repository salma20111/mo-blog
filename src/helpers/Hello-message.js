 export const HelloMessage = (name , gender) => {
    return `Hello ${gender === "male" ? "Mr" : "Miss"} 
    ${name.split(" ").filter((n) => n.trim().length > 0)[0]}`;
}


