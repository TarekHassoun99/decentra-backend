import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRemainingTables1694838687369 implements MigrationInterface {
    name = 'CreateRemainingTables1694838687369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "art_piece" ("ArtPieceId" SERIAL NOT NULL, "name" character varying NOT NULL, "url" character varying NOT NULL, "dimensions" character varying NOT NULL, "status" character varying NOT NULL, "ownerId" integer, CONSTRAINT "PK_759c93aa5feca4195d89884bda7" PRIMARY KEY ("ArtPieceId"))`);
        await queryRunner.query(`CREATE TABLE "payment_method" ("PaymentMethodId" SERIAL NOT NULL, "details" character varying NOT NULL, "UserId" integer, CONSTRAINT "PK_69cb0d33674d3df42381423b9e3" PRIMARY KEY ("PaymentMethodId"))`);
        await queryRunner.query(`CREATE TABLE "purchase" ("PurchaseId" SERIAL NOT NULL, "Price" numeric NOT NULL, "Status" character varying NOT NULL, "purchaseDate" TIMESTAMP NOT NULL, "artPieceId" integer, "galleryId" integer, "BuyerUserId" integer, "PaymentMethodId" integer, CONSTRAINT "PK_57d1b40584198763e111b4434f8" PRIMARY KEY ("PurchaseId"))`);
        await queryRunner.query(`ALTER TABLE "art_piece" ADD CONSTRAINT "FK_2499dcf09679e473698ae746912" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_method" ADD CONSTRAINT "FK_43da776a8593a2fca2b131af816" FOREIGN KEY ("UserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase" ADD CONSTRAINT "FK_9198e484d44fcba3624ac96909e" FOREIGN KEY ("artPieceId") REFERENCES "art_piece"("ArtPieceId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase" ADD CONSTRAINT "FK_4ba4749bf7b04a101fe5ab97adb" FOREIGN KEY ("galleryId") REFERENCES "gallery"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase" ADD CONSTRAINT "FK_5b95f2f07b33894ac42dbc89b62" FOREIGN KEY ("BuyerUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase" ADD CONSTRAINT "FK_b6b524920e9e87e332ddb0e8fc0" FOREIGN KEY ("PaymentMethodId") REFERENCES "payment_method"("PaymentMethodId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase" DROP CONSTRAINT "FK_b6b524920e9e87e332ddb0e8fc0"`);
        await queryRunner.query(`ALTER TABLE "purchase" DROP CONSTRAINT "FK_5b95f2f07b33894ac42dbc89b62"`);
        await queryRunner.query(`ALTER TABLE "purchase" DROP CONSTRAINT "FK_4ba4749bf7b04a101fe5ab97adb"`);
        await queryRunner.query(`ALTER TABLE "purchase" DROP CONSTRAINT "FK_9198e484d44fcba3624ac96909e"`);
        await queryRunner.query(`ALTER TABLE "payment_method" DROP CONSTRAINT "FK_43da776a8593a2fca2b131af816"`);
        await queryRunner.query(`ALTER TABLE "art_piece" DROP CONSTRAINT "FK_2499dcf09679e473698ae746912"`);
        await queryRunner.query(`DROP TABLE "purchase"`);
        await queryRunner.query(`DROP TABLE "payment_method"`);
        await queryRunner.query(`DROP TABLE "art_piece"`);
    }

}
