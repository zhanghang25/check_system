import { PartialType } from '@nestjs/swagger';
import { CreateRecordDto } from './create-record.dto';

export class UpdateRecordDto extends PartialType(CreateRecordDto) {}

export class CheckRecordDto {
  checkPerson: string;

  checkMsg: string;
}
