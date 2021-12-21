import { Injectable } from '@nestjs/common'
import { Cat } from './cat'
import { NewCatInput } from './dto/newCat.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { OwnersService } from '../owners/owners.service'

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepostiory: Repository<Cat>,
    private ownersService: OwnersService,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepostiory.find()
  }

  findOneById(id: number): Promise<Cat> {
    return this.catsRepostiory.findOne(id)
  }

  async create({ ownerId, ...payload }: NewCatInput) {
    const owner = await this.ownersService.findOneById(ownerId)
    // const cat =
    // cat.owner = params.owner
    // await this.catsRepostiory.save(cat)
    return await this.catsRepostiory.save({ ...payload, owner })
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.catsRepostiory.delete(id)
    return result.affected > 0
  }
}
