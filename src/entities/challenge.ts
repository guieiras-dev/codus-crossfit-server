import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("challenges")
export default class Challenge extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column({ type: "text", nullable: true })
  public description!: string;

  @Column({ name: "created_at", type: "timestamp with time zone" })
  public createdAt!: Date;

  @Column({ name: "updated_at", type: "timestamp with time zone" })
  public updatedAt!: Date;
}
