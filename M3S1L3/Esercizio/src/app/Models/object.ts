import { iPost } from "./post"

export interface Object {
  posts : iPost
  total : number
  skip : number
  limit : number
}
