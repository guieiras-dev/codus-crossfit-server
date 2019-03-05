import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import Challenge from "../../entities/challenge";
import { ChallengeStatus } from "../../entities/wip_challenge";

export class CreateWipChallenges1551228127302 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: "wip_challenges",
      columns: [
        { name: "id", type: "int", isPrimary: true, isGenerated: true },
        { name: "user_email", type: "character varying" },
        { name: "status", type: "enum", enum: Object.values(ChallengeStatus) },
        { name: "challenge_id", type: "int" },
        { name: "created_at", type: "timestamp without time zone" },
        { name: "updated_at", type: "timestamp without time zone" },
      ],
    }), true);

    await queryRunner.createForeignKey("wip_challenges", new TableForeignKey({
      columnNames: ["challenge_id"],
      onDelete: "CASCADE",
      referencedColumnNames: ["id"],
      referencedTableName: "challenges",
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("wip_challenges");
  }

}
