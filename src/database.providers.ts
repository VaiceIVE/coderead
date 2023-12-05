import { DataSource } from 'typeorm';
import { Qrdata } from './qrdata.entity';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mssql",
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        entities: [],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
  {
    provide: 'QR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Qrdata),
    inject: ['DATA_SOURCE'],
  },
];