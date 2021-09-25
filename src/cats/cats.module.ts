import { Module } from '@nestjs/common'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'
import { CatsResolver } from './cats.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cat } from './cat'

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService, CatsResolver],
  exports: [CatsService],
})
export class CatsModule {}
