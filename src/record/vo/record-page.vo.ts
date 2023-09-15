import { Record } from '../entities/record.entity';

export class RecordListVo {
  totalSize: number;
  data: Array<Record>;
}
