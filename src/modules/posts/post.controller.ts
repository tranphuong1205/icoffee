import { ApiTags } from '@nestjs/swagger';
import { FilterPostDto } from './post-filter.dto';
import { PostsService } from './post.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreatePostDto } from './create-post.dto';
import { CreateCommentDto } from './create-comment.dto';
import { CreateLikeDto } from './create-like.dto';

@Controller('posts')
@ApiTags('Post')
export class PostController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/filter')
  findAll(@Query() filter: FilterPostDto) {
    return this.postsService.filter(filter);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findById(id);
  }

  @Post()
  createPost(@Body() data: CreatePostDto){
    return this.postsService.createPost(data);
  }

  @Post('comment')
  createComment(@Body() data: CreateCommentDto){
    return this.postsService.createComment(data)
  }

  @Get('comment/:postId')
  getCommentsByPostId(@Param('postId', ParseIntPipe) postId: number){
    return this.postsService.getCommentByPostId(postId)
  }

  @Get('liked/:userId')
  getLikedPost(@Param('userId', ParseIntPipe) userId: number){
    return this.postsService.getLikedPost(userId)
  }

  @Post('like')
  like(@Body() data: CreateLikeDto){
    return this.postsService.createLike(data)
  }

  @Delete('like')
  dislike(@Body() data:CreateLikeDto ){
    return this.postsService.dislike(data)
  }

  @Delete('delete/:id')
  deletePost(@Param('id', ParseIntPipe) id: number){
    return this.postsService.deletePost(id)
  }

  @Patch('update/:id')
  updatePost(@Param('id', ParseIntPipe) id: number, @Body() data: CreatePostDto){
    return this.postsService.updatePost(id, data)
  }

  @Get('sameCourse/:postId')
  getSameCourse(@Param('postId', ParseIntPipe) postId: number){
    return this.postsService.getSameCourse(postId)
  }
}
