import { IPage } from './page'
import { ITag } from './tag'

export interface IRecord {
  id: number,
  name: string,
  extension: string,
  location: string,
  textlocation: string,
  size: number,
  pagecount: number,
  hash: string,
  datecreate: Date,
  datemodified: Date,
  nodes: string,
  pages: IPage[],
  tags: ITag[]
}
