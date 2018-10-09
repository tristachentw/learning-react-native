import faker from 'faker'

const LIST_LENGTH = 50
const LIST = Array.from(Array(LIST_LENGTH), (v, i) => ({
  id: faker.random.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  avatar: faker.image.avatar(),
  jobTitle: faker.name.jobTitle(),
  birth: faker.date.past().toDateString(),
  city: faker.address.city(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat()
}))

export default LIST
