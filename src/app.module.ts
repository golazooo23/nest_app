import { Module } from '@nestjs/common'
import { CatsModule } from './cats/cats.module'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cat } from './cats/cat'

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_app',
      entities: [Cat],
      synchronize: false,
    }),
    CatsModule,
  ],
})
export class AppModule {}
