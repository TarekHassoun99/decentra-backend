import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyGalleryTable1692285982554 implements MigrationInterface {
    name = 'ModifyGalleryTable1692285982554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gallery" DROP CONSTRAINT "FK_8d7820b40df1b4d6d8716a7c236"`);
        await queryRunner.query(`ALTER TABLE "gallery" ALTER COLUMN "ownerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gallery" ADD CONSTRAINT "FK_8d7820b40df1b4d6d8716a7c236" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gallery" DROP CONSTRAINT "FK_8d7820b40df1b4d6d8716a7c236"`);
        await queryRunner.query(`ALTER TABLE "gallery" ALTER COLUMN "ownerId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "gallery" ADD CONSTRAINT "FK_8d7820b40df1b4d6d8716a7c236" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
