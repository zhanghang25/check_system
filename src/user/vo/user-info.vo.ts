import { ApiProperty } from '@nestjs/swagger';

export class UserDetailVo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  roleId: number;

  // username: string;

  @ApiProperty()
  username: string;
  // nickName: string;

  // @ApiProperty()
  // email: string;

  // @ApiProperty()
  // headPic: string;

  // @ApiProperty()
  // phoneNumber: string;

  // @ApiProperty()
  // isFrozen: boolean;

  // @ApiProperty()
  // createTime: Date;
}
