const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;


app.get("/user", (request, response) => {
    const createUser = {
        _id: faker.random.numeric(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    response.json({createUser});
});

app.get("/company", (request, response) =>{
    const createCompany = {
        _id: faker.random.numeric(),
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode('#####'),
        county: faker.address.country()
    }
    response.json({createCompany});
})

app.get("/user/company", (request, response) =>{

    const createUser = {
        _id: faker.random.numeric(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    const createCompany = {
        _id: faker.random.numeric(),
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode('#####'),
        county: faker.address.country()
    }
    response.json({createUser,createCompany});
})



app.listen( port, () => console.log(`Listening on port: ${port}`) );
