import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("challenges")
export default class Challenge extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column({ type: "text", nullable: true })
  public description!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  public createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  public updatedAt!: Date;
}
