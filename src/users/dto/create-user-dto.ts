import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  // https://www.npmjs.com/package/class-validator/v/0.6.0
  @IsAlphanumeric()
  @MaxLength(10)
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: false })
  age?: number;
}
