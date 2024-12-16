import { ApiTags } from '@nestjs/swagger';
import { FilterPostDto } from './post-filter.dto';
import { PostsService } from './post.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreatePostDto } from './create-post.dto';

@Controller('posts')
@ApiTags('Post')
export class PostController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/filter')
  findAll(@Query() filter: FilterPostDto) {
    return this.postsService.filter(filter);
  }

  @Get('/:id')
  findById(@Param('id') id) {
    return this.postsService.findById(id);
  }

  @Post()
  createPost(@Body() data: CreatePostDto){
    return this.postsService.createPost(data);
  }
}
