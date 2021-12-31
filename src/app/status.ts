export interface IStatus {
  up: boolean,
  environment: {
    dbhost: string,
    database: string,
    dbengine: string,
    dbuser: string,
    storage_location: string
  },
  database: {
    engine: {
      dialect: string,
      table_names: string[]
    },
    config: [
      database: string,
      driver: string,
      host: string,
      post: number,
      username: string
    ],
    initialized: boolean
  }
}
