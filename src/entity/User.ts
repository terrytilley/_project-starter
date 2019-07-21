import * as bcrypt from 'bcryptjs';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  public static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  public static async comparePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 25, nullable: false, unique: true })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'boolean', default: false })
  confirmed: boolean;

  @Column({ type: 'boolean', default: false })
  locked: boolean;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
    nullable: false,
  })
  createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await User.hashPassword(this.password);
  }
}
