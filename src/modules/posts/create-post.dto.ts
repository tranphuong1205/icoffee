import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
 

  @IsString()
  @ApiProperty({ required: true })
  name: string;

  @IsString()
  @ApiProperty({ required: true })
  name_jp: string;

  @IsNumber()
  @ApiProperty({ required: false })
  price: number;

  @IsNumber()
  @ApiProperty({ required:true})
  categoryId: number;

  @IsNumber()
  @ApiProperty({ required: false })
  sameCourseId?: number | null;

  @IsString()
  @ApiProperty({ required: true })
  materials: string;

  @IsString()
  @ApiProperty({ required: true })
  flavorDetail: string;

  @IsString()
  @ApiProperty({ required: false })
  making  : string;

  @IsString()
  @ApiProperty({ required: false })
  image   : string;
  
}
