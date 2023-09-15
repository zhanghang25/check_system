import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Record } from './entities/record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Record])],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
