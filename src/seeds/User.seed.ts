import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../entity/User';

export class UserSeeder implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(User)().seed();
  }
}
