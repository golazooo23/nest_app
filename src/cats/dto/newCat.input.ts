import { Field, InputType, Int, ID } from '@nestjs/graphql'
import { Max, MaxLength, Min } from 'class-validator'

@InputType()
export class NewCatInput {
  @Field()
  @MaxLength(30)
  name: string

  @Field((type) => Int)
  @Min(0)
  @Max(99)
  age: number

  @Field((type) => [ID])
  ownerId: number
}
