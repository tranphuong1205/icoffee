import { Injectable } from '@nestjs/common';
import { PostsRepository } from './post.repository';
import { FilterPostDto } from './post-filter.dto';
import { CreateCommentDto } from './create-comment.dto';
import { Prisma } from '@prisma/client';
import { CreatePostDto } from './create-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostsRepository) {}

  async filter(filter: FilterPostDto) {
    return await this.postRepository.filter(filter);
  }

  async findById(id: number) {
    return await this.postRepository.findById(id);
  }

  async createComment(data: CreateCommentDto){
    const param: Prisma.CommentUncheckedCreateInput = {
      userId: data.userId,
      userName: data.userName,
      description: data.description,
      postId: data.postId,
    }
    return await this.postRepository.createComment(param);
  }

  async getAllComment(){
    return await this.postRepository.getAllComment();
  }
  async createPost(data: CreatePostDto){
    return await this.postRepository.createPost(data)
  }
}
