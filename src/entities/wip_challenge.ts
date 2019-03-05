import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Challenge from "./challenge";

export enum ChallengeStatus {
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
}

@Entity("wip_challenges")
export default class WipChallenge extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ name: "user_email" })
  public userEmail!: string;

  @Column({ type: "enum", enum: ChallengeStatus })
  public status!: ChallengeStatus;

  @ManyToOne(() => Challenge)
  @JoinColumn({ name: "challenge_id" })
  public challenge!: Promise<Challenge>;

  @Column({ name: "challenge_id" })
  public challengeId!: number;

  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;
}
