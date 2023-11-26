import { ApiProperty } from '@nestjs/swagger';

export class buyDto {
  @ApiProperty({ type: String, required: true, default: '1' })
  amount: string;
}
