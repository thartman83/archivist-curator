import { IEdition } from './edition'

export interface ICollection {
  id: number,
  title: string,
  editions: IEdition[],
  current_edition: IEdition
}
