import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateUser1553599898897 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        { name: "id", type: "int", isPrimary: true, isGenerated: true },
        { name: "name", type: "character varying" },
        {
          name: "email",
          type: "character varying",
          isUnique: true,
        },
        { name: "encrypted_password", type: "character varying" },
        { name: "roles", type: "character varying[]", default: "ARRAY['USER']" },
        { name: "created_at", type: "timestamp without time zone", default: "now()" },
        { name: "updated_at", type: "timestamp without time zone", default: "now()" },
      ],
    }), true);

    await queryRunner.createIndex("users", new TableIndex({
      name: "IDX_USERS_EMAIL",
      columnNames: ["email"],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("users");
  }
}
