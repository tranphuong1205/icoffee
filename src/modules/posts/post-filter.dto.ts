import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class FilterPostDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
  })
  search?: string;

  @IsOptional()
  @IsNumber()
  @Transform(({value}) => Number(value))
  @ApiProperty({ required: false })
  categoryId?: number[];

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  flavor?: string[];

  @IsOptional()
  @Transform(({value}) => (Array.isArray(value) ? value.map((item) => Number(item)) : [Number(value)]))
  @IsArray()
  @ApiProperty({ required: false })
  beginPrice?: number[];

  @IsOptional()
  @Transform(({value}) => (Array.isArray(value) ? value.map((item) => Number(item)) : [Number(value)]))
  @IsArray()
  @ApiProperty({ required: false })
  endPrice?: number[];
}
