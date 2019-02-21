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

enum ChallengeStatus {
  TODO = "todo",
  DOING = "doing",
  DONE = "done"
}

@Entity("wip_challenges")
export default class WipChallenge extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "user_email" })
  userEmail!: string;

  @Column({ type: "enum", enum: ChallengeStatus })
  status!: ChallengeStatus;

  @ManyToOne(() => Challenge)
  @JoinColumn({ name: "challenge_id" })
  challenge!: Promise<Challenge>;

  @Column({ name: "challenge_id" })
  challengeId!: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
