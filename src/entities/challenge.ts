import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("challenges")
export default class Challenge extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: "text", nullable: true })
  description!: string;

  @Column({ name: "created_at", type: "timestamp with time zone" })
  createdAt!: Date;

  @Column({ name: "updated_at", type: "timestamp with time zone" })
  updatedAt!: Date;
}
