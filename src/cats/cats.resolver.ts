import { NotFoundException, Inject } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Injector } from '@nestjs/core/injector/injector'
import { Cat } from './cat'
import { CatsService } from './cats.service'
import { NewCatInput } from './dto/newCat.input'
import { Owner } from '../owners/owner'

@Resolver((of) => Cat)
export class CatsResolver {
  constructor(@Inject(CatsService) private catsService: CatsService) {}

  @Query((returns) => [Cat])
  cats(): Promise<Cat[]> {
    return this.catsService.findAll()
  }

  @Query((returns) => Cat)
  async getCat(@Args({ name: 'id', type: () => Int }) id: number) {
    const cat = await this.catsService.findOneById(id)
    if (!cat) {
      throw new NotFoundException(id)
    }
    return cat
  }

  // @Mutation((returns) => Cat)
  // async addCat(@Args('newCat') newCat: NewCatInput) {
  //   return await this.catsService.create(newCat)
  // }

  @Mutation((returns) => Boolean)
  async removeCat(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.catsService.remove(id)
  }
}
