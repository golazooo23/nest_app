import { Injectable } from '@nestjs/common'
import { Cat } from './cat'
import { NewCatInput } from './dto/newCat.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepostiory: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepostiory.find()
  }

  findOneById(id: number): Promise<Cat> {
    return this.catsRepostiory.findOne(id)
  }

  async create(data: NewCatInput): Promise<Cat> {
    const cat = this.catsRepostiory.create(data)
    await this.catsRepostiory.save(cat)
    return cat
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.catsRepostiory.delete(id)
    return result.affected > 0
  }
}
