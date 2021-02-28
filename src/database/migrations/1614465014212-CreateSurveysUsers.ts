import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSurveysUsers1614465014212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'surveys_users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'survey_id',
            type: 'uuid',
          },
          {
            name: 'value',
            type: 'number',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKuser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE', // OCORRERA A FUNCAO EM CASCATA: DELETE E UPDATE
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKsurvey',
            referencedTableName: 'surveys',
            referencedColumnNames: ['id'],
            columnNames: ['survey_id'],
            onDelete: 'CASCADE', // OCORRERA A FUNCAO EM CASCATA: DELETE E UPDATE
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
    // await queryRunner.createForeignKey;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('surveys_users');
    //await queryRunner.dropForeignKey;
  }
}
