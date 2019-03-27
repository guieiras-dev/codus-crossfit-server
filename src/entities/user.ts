import bcrypt from "bcrypt";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum UserRoles {
  ADMIN = "ADMIN",
  USER = "USER",
}

@Entity("users")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public email!: string;

  @Column({ name: "encrypted_password" })
  public encryptedPassword!: string;

  @Column({ type: "character varying", array: true })
  public roles: UserRoles[] = [UserRoles.USER];

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  public createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  public updatedAt!: Date;

  public async setPassword(password: string): Promise<void> {
    const defaultSaltRounds = 10;
    const envSaltRounds = process.env.BCRYPT_SALT_ROUNDS && parseInt(process.env.BCRYPT_SALT_ROUNDS, 10);
    const saltRounds = envSaltRounds || defaultSaltRounds;

    this.encryptedPassword = await bcrypt.hash(password, saltRounds);
  }

  public validPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.encryptedPassword);
  }
}
