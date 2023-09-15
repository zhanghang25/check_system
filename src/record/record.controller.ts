import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  DefaultValuePipe,
  Query,
  Delete,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { CheckRecordDto, UpdateRecordDto } from './dto/update-record.dto';
import { RequireLogin, UserInfo } from 'src/custom.decorator';
import { FindRecordDto } from './dto/find-record.dto';
import { JwtUserData } from 'src/login.guard';
@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @RequireLogin()
  @Post('create')
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordService.create(createRecordDto);
  }

  @RequireLogin()
  @Post('page')
  findAll(@Body() findRecordDto: FindRecordDto, @UserInfo() user: JwtUserData) {
    return this.recordService.findPageAll(findRecordDto, user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordService.findOne(+id);
  }

  @RequireLogin()
  @Post('check/:id')
  update(
    @Param('id') id: string,
    @Body() updateRecordDto: CheckRecordDto,
    @UserInfo() user: JwtUserData,
  ) {
    return this.recordService.check(+id, updateRecordDto, user);
  }

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.recordService.remove(+id);
  }
}
