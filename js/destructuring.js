const alamin = {
    Name: 'alin',
    number: 0561464,
    email: 'amin.gmail.com',
    amin: {
        Namea: 'amineddd',
        number: 235665,
        email: 'amin.gmail.com',
    }
};

const { Name, number, email } = alamin;
const { Namea, number, email } = alamin.amin;
console.log(Name);
console.log(Namea);
