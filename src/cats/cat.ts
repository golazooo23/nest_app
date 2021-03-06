import { Field, ID, ObjectType, Int } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number

  @Column({ length: '30' })
  @Field()
  name: string

  @Column()
  @Field((type) => Int)
  age: number

  @CreateDateColumn()
  @Field()
  createdAt: Date
}
