import { ApiProperty } from '@nestjs/swagger';

export class OpenBetsDto {
  @ApiProperty({ type: String, required: true, default: '1' })
  duration: string;
}
