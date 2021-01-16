import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLesson1610833624278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'lesson',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'duration',
              type: 'integer',
              isNullable: false
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'video_id',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('lesson')
    }

}
