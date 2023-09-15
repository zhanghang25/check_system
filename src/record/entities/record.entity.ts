import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'records',
})
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '作业部门',
    name: 'yan_an',
  })
  yanAn: string;

  @Column({
    comment: '作业单位',
    name: 'che_jian',
  })
  cheJian: string;

  @Column({
    comment: '作业单位ID',
    name: 'che_jian_id',
  })
  cheJianId: number;

  @Column({
    comment: '作业日期',
    name: 'work_date',
    type: 'date',
  })
  workDate: Date;

  @Column({
    comment: '作业类型',
    name: 'work_type',
    default: '维修',
  })
  workType: string;

  @Column({
    comment: '专业系统，线路：1，桥路：2',
    name: 'job_type',
  })
  jobType: number;

  @Column({
    comment: '作业级别，I级:1,II级:2',
    name: 'grade_type',
  })
  gradeType: number;

  @Column({
    comment: '作业内容',
    name: 'work_content',
    type: 'text',
  })
  workContent: string;

  @Column({
    comment: '作业方案',
    name: 'work_plan',
  })
  workPlan: string;

  @Column({
    comment: '审核部门',
    name: 'check_dept',
    nullable: true,
  })
  checkDept: string;

  @Column({
    comment: '审核人',
    name: 'check_person',
    nullable: true,
  })
  checkPerson: string;

  @Column({
    comment: '审核意见',
    name: 'check_msg',
    nullable: true,
  })
  checkMsg: string;

  @Column({
    comment: '审核时间',
    name: 'check_time',
    type: 'datetime',
    nullable: true,
  })
  checkTime: Date;

  @Column({
    comment: '审核状态(0,未通过，1，通过)',
    name: 'check_status',
    default: false,
    type: 'boolean',
  })
  checkStatus: boolean;

  @Column({})
  @CreateDateColumn({
    comment: '记录创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '记录修改时间：',
  })
  updateTime: Date;
}
