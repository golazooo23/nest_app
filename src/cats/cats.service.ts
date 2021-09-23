import { Injectable } from '@nestjs/common'
import { Cat } from './cat'
import { NewCatInput } from './dto/newCat.input'

let cats: Cat[] = [
  { id: 1, name: 'ムギ', age: 5, createdAt: new Date() },
  { id: 2, name: 'ソラ', age: 7, createdAt: new Date() },
  { id: 3, name: 'レオ', age: 9, createdAt: new Date() },
]

@Injectable()
export class CatsService {
  findAll(): Promise<Cat[]> {
    return Promise.resolve(cats)
  }

  findOneById(id: number): Promise<Cat> {
    const cat = cats.find((cat) => cat.id === id)
    return Promise.resolve(cat)
  }

  create(data: NewCatInput): Promise<Cat> {
    const cat: Cat = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
    }
    cats.push(cat)

    return Promise.resolve(cat)
  }

  async remove(id: number): Promise<boolean> {
    cats = cats.filter((cat) => cat.id !== id)
    return true
  }
}
