export interface IEdition {
  editionNumber: number,
  native: {
    title: string,
    filename: string,
    checksum: string,
    size: number,
    mimetype: string,
    created: Date
  }
}
