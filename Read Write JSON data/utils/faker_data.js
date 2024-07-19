const { faker } = require("@faker-js/faker");
let firstName = faker.person.firstName("female");
let lastName = faker.person.lastName("female");
let fakerData = {
  firstname: firstName,
  lastname: lastName,
  fullName: faker.person.fullName({ firstName: firstName, lastName: lastName }),
  email: faker.internet.email({
    firstName: firstName,
    lastname: lastName,
    provider: "yopmail.com",
  }),
  password: faker.internet.password({ lenght: 8 }),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  state: faker.location.state(),
  city: faker.location.city(),
  zipcode: faker.location.zipCode("######"),
  phoneNumber: faker.phone.number(),
  dob: {
    day: faker.number.int({ min: 1, max: 31 }),
    month: faker.date.month(),
    year: faker.number.int({ min: 1990, max: 2001 }),
  },
  subject: faker.lorem.text(),
  message: faker.lorem.sentence(),
};

module.exports = { fakerData };
