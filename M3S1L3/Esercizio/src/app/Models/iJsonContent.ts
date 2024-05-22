import { iPost } from "./iPost"

export interface iJsonContent {
  posts : iPost[]
  total : number
  skip : number
  limit : number
}
