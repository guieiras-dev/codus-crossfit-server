import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AddTimestampsDefaultValues1551900809947 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE challenges ALTER COLUMN created_at SET DEFAULT now();");
    await queryRunner.query("ALTER TABLE challenges ALTER COLUMN updated_at SET DEFAULT now();");
    await queryRunner.query("ALTER TABLE wip_challenges ALTER COLUMN created_at SET DEFAULT now();");
    return queryRunner.query("ALTER TABLE wip_challenges ALTER COLUMN updated_at SET DEFAULT now();");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("ALTER TABLE challenges ALTER COLUMN created_at DROP DEFAULT;");
    await queryRunner.query("ALTER TABLE challenges ALTER COLUMN updated_at DROP DEFAULT;");
    await queryRunner.query("ALTER TABLE wip_challenges ALTER COLUMN created_at DROP DEFAULT;");
    return queryRunner.query("ALTER TABLE wip_challenges ALTER COLUMN updated_at DROP DEFAULT;");
  }

}
