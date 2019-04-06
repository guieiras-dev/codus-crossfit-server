import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateChallenges1550932229367 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "challenges",
      columns: [
        { name: "id", type: "int", isPrimary: true, isGenerated: true },
        { name: "title", type: "character varying" },
        { name: "description", type: "text", isNullable: true },
        { name: "created_at", type: "timestamp without time zone" },
        { name: "updated_at", type: "timestamp without time zone" },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("challenges");
  }

}
