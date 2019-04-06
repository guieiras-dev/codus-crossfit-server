import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveTodoFromWipChallenges1554558476713 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "UPDATE wip_challenges SET status='DOING' WHERE status='TODO';"
    );
    await queryRunner.query(
      "ALTER TYPE wip_challenges_status_enum RENAME TO status_enum_old;"
    );
    await queryRunner.query(
      "CREATE TYPE wip_challenges_status_enum AS ENUM('DOING', 'DONE');"
    );
    await queryRunner.query(
      "ALTER TABLE wip_challenges ALTER COLUMN status TYPE wip_challenges_status_enum USING wip_challenges.status:: text:: wip_challenges_status_enum;"
    );
    await queryRunner.query(
      "DROP TYPE status_enum_old;"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TYPE wip_challenges_status_enum RENAME TO status_enum_old;"
    );
    await queryRunner.query(
      "CREATE TYPE wip_challenges_status_enum AS ENUM('TODO', 'DOING', 'DONE');"
    );
    await queryRunner.query(
      "ALTER TABLE wip_challenges ALTER COLUMN status TYPE wip_challenges_status_enum USING wip_challenges.status:: text:: wip_challenges_status_enum;"
    );
    await queryRunner.query(
      "DROP TYPE status_enum_old;"
    );
  }
}
