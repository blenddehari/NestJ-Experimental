import { Migration } from '@mikro-orm/migrations';

export class Migration20240826175743 extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table "book" ("id" serial primary key, "title" varchar(255) not null, "author" varchar(255) not null, "genre" varchar(255) not null);');
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "book" cascade;');
  }

}
