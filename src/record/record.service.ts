import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { CheckRecordDto, UpdateRecordDto } from './dto/update-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Record as NRecord } from './entities/record.entity';
// import { Record as newRecord } from '@nestjs/mapped-types';
import { Like, Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { cloneDeep, isNil } from 'lodash';
import { FindRecordDto } from './dto/find-record.dto';
import { RecordListVo } from './vo/record-page.vo';
import { JwtUserData } from 'src/login.guard';

@Injectable()
export class RecordService {
  @InjectRepository(NRecord)
  private recordRepository: Repository<NRecord>;

  @InjectRepository(User)
  private userRepository: Repository<User>;

  async create(createRecordDto: CreateRecordDto) {
    createRecordDto.workDate = new Date(createRecordDto.workDate);
    for (let i = 0; i < 100; i++) {
      const dto = cloneDeep(createRecordDto);
      await this.recordRepository.save(dto);
    }
    return '成功提交记录！';
  }

  async findPageAll(
    { page, pageSize, checkStatus, gradeType, jobType }: FindRecordDto,
    user: JwtUserData,
  ) {
    const skipCount = (page - 1) * pageSize;

    const condition: Record<string, any> = {};

    if (checkStatus) {
      condition.checkStatus = checkStatus;
    }
    if (gradeType) {
      condition.gradeType = gradeType;
    }
    if (jobType) {
      condition.jobType = jobType;
    }

    if (!isNil(user) && user.roleId == 2) {
      condition.cheJianId = user.userId;
    }

    const [records, totalCount] = await this.recordRepository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });

    const vo = new RecordListVo();

    vo.data = records;
    vo.totalSize = totalCount;
    return vo;
  }

  findAll() {
    return `This action returns all record`;
  }

  findOne(id: number) {
    return `This action returns a #${id} record`;
  }

  async check(id: number, checkDto: CheckRecordDto, user: JwtUserData) {
    const record = await this.recordRepository.findOne({
      where: {
        id,
      },
    });

    record.checkPerson = checkDto.checkPerson;
    record.checkTime = new Date();
    record.checkMsg = checkDto.checkMsg;
    record.checkDept = user.username;
    record.checkStatus = true;

    await this.recordRepository.save(record);
    return `This action updates a #${id} record`;
  }

  async remove(id: number) {
    await this.recordRepository.delete(id);
    return `This action removes a #${id} record`;
  }
}
