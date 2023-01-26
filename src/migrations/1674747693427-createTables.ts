import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1674747693427 implements MigrationInterface {
    name = 'createTables1674747693427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stock" ("stock_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" integer NOT NULL, "min_stock" integer, "productIdProductId" integer, CONSTRAINT "REL_b4560f234feacf2dae97fd5e1b" UNIQUE ("productIdProductId"), CONSTRAINT "PK_535f28fb720127de0997a5a866e" PRIMARY KEY ("stock_id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("product_id" SERIAL NOT NULL, "name" character varying NOT NULL, "img" character varying, "description" text, "cost_price" double precision NOT NULL, "sale_price" double precision NOT NULL, "active" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "stockStockId" uuid, "categoryCategoryId" uuid, CONSTRAINT "REL_5e89c6d53f4769aa019a787011" UNIQUE ("stockStockId"), CONSTRAINT "PK_a8940a4bf3b90bd7ac15c8f4dd9" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_51615bef2cea22812d0dcab6e18" PRIMARY KEY ("category_id"))`);
        await queryRunner.query(`CREATE TABLE "provider" ("provider_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "company" character varying NOT NULL, "representative" character varying NOT NULL, "contact" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_c9e8678bd75995f9ff55267c98f" UNIQUE ("company"), CONSTRAINT "PK_092b053f2a3e5220a01f6323638" PRIMARY KEY ("provider_id"))`);
        await queryRunner.query(`CREATE TABLE "provider_products_products" ("providerProviderId" uuid NOT NULL, "productsProductId" integer NOT NULL, CONSTRAINT "PK_f4047156b0a7fe30586c47650fc" PRIMARY KEY ("providerProviderId", "productsProductId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_14068532e602c7cae59fe36254" ON "provider_products_products" ("providerProviderId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0e5a66c7cc519142fa663de42b" ON "provider_products_products" ("productsProductId") `);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_b4560f234feacf2dae97fd5e1b4" FOREIGN KEY ("productIdProductId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_5e89c6d53f4769aa019a7870117" FOREIGN KEY ("stockStockId") REFERENCES "stock"("stock_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_a06a40e89f9347c0f1c7e6834eb" FOREIGN KEY ("categoryCategoryId") REFERENCES "categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "provider_products_products" ADD CONSTRAINT "FK_14068532e602c7cae59fe36254b" FOREIGN KEY ("providerProviderId") REFERENCES "provider"("provider_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "provider_products_products" ADD CONSTRAINT "FK_0e5a66c7cc519142fa663de42ba" FOREIGN KEY ("productsProductId") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provider_products_products" DROP CONSTRAINT "FK_0e5a66c7cc519142fa663de42ba"`);
        await queryRunner.query(`ALTER TABLE "provider_products_products" DROP CONSTRAINT "FK_14068532e602c7cae59fe36254b"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_a06a40e89f9347c0f1c7e6834eb"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_5e89c6d53f4769aa019a7870117"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_b4560f234feacf2dae97fd5e1b4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0e5a66c7cc519142fa663de42b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_14068532e602c7cae59fe36254"`);
        await queryRunner.query(`DROP TABLE "provider_products_products"`);
        await queryRunner.query(`DROP TABLE "provider"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "stock"`);
    }

}
