import { Field, ID, ObjectType, Int } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Cat } from '../cats/cat'

@Entity()
@ObjectType()
export class Owner {
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

  @OneToMany(() => Cat, (cat) => cat.owner)
  cats: Cat[]
}
