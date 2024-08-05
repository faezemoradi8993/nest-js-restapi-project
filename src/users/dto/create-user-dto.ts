import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: false })
  age?: number;
}
