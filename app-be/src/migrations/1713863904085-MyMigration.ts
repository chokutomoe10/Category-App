import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1713863904085 implements MigrationInterface {
    name = 'MyMigration1713863904085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`displayName\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`displayIcon\` varchar(255) NOT NULL, \`fullPortrait\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`video\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`abilities\` (\`id\` int NOT NULL AUTO_INCREMENT, \`slot\` varchar(255) NOT NULL, \`displayName\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`displayIcon\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`abilities\` ADD CONSTRAINT \`FK_8bc56b28240a44a88dddb95e19a\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`abilities\` DROP FOREIGN KEY \`FK_8bc56b28240a44a88dddb95e19a\``);
        await queryRunner.query(`DROP TABLE \`abilities\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
