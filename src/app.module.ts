import { Module } from '@nestjs/common'
import { CatsModule } from './cats/cats.module'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
    CatsModule,
  ],
})
export class AppModule {}
