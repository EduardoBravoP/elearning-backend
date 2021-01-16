import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddCourseIdToLesson1610834041341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('lesson', new TableColumn({
        name: 'course_id',
        type: 'uuid',
        isNullable: false
    })
    )

    await queryRunner.createForeignKey('lesson', new TableForeignKey({
        name: 'LessonCourse',
        columnNames: ['course_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'courses',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('lesson', 'LessonCourse')

      await queryRunner.dropColumn('lesson', 'course_id')
    }

}
