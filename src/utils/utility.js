import { faker } from '@faker-js/faker';

const randomizer = () => {
  return Math.random() * 1000;
};

const companyTitle = faker.company.name();

export { randomizer, companyTitle };
