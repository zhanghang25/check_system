import { Transform, Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { TransformMillisToDateString } from 'src/utils/transformers';

export class CreateRecordDto {
  yanAn: string;

  cheJian: string;

  cheJianId: number;

  //   @IsNumber()
  //   @Transform(TransformMillisToDateString)
  @Type(() => Date)
  workDate: Date;

  workType: string;

  jobType: number;

  gradeType: number;

  workContent: string;

  workPlan: string;
}
