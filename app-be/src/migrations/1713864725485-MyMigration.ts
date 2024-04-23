import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1713864725485 implements MigrationInterface {
    name = 'MyMigration1713864725485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`abilities\` DROP FOREIGN KEY \`FK_8bc56b28240a44a88dddb95e19a\``);
        await queryRunner.query(`ALTER TABLE \`abilities\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`video\` \`video\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`abilities\` ADD CONSTRAINT \`FK_8bc56b28240a44a88dddb95e19a\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`abilities\` DROP FOREIGN KEY \`FK_8bc56b28240a44a88dddb95e19a\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`video\` \`video\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`abilities\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`abilities\` ADD CONSTRAINT \`FK_8bc56b28240a44a88dddb95e19a\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
