import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import * as uuid from 'uuid';

import { User } from '../entity/User';

define(User, (faker: typeof Faker) => {
  const user = new User();
  const email = faker.internet.email();
  const username = faker.internet.userName();

  user.id = uuid.v4();
  user.email = email;
  user.username = username;
  user.password = 'qwerty123';

  return user;
});
