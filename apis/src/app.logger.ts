import winston from "winston";

const getLogger = () => {
  return winston.createLogger({
    level: "info",
    format: winston.format.json({
      replacer: (___: string, { level, message }: any) =>
        `${new Date().toLocaleString("en-US")}: ${level} --- ${message}`
    }),
    defaultMeta: { service: "user-service" },
    transports: [
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console()
    ]
  });
};

const logger = getLogger();

export default logger;
