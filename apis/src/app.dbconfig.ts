import { Sequelize } from "sequelize";
import logger from "./app.logger";

const { env } = process;

// export const syncParams = { force: true };
export const syncParams = {};

export const getDbHandle = () => {
  // return new Sequelize({
  //   dialect: "mysql",
  //   host: env.DB_HOST,
  //   username: env.DB_USER,
  //   password: env.DB_PASSWORD,
  //   schema: env.DB_SCHEMA,
  //   logging: logger.info.bind(logger)
  // });

  return new Sequelize(env.DB_SCHEMA ?? "", env.DB_USER ?? "", env.DB_PASS, {
    host: env.DB_HOST,
    dialect: "mysql",
    logging: logger.info.bind(logger)
  });
};

const dbHandle = getDbHandle();

export default dbHandle;
