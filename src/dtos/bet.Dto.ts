import { ApiProperty } from '@nestjs/swagger';

export class betDto {
  @ApiProperty({ type: String, required: true, default: '1' })
  numberOfBets: string;
}
