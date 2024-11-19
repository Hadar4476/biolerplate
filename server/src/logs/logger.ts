import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Console transport for development
    new DailyRotateFile({
      filename: "/src/logs/logs/application-%DATE%.log", // File path pattern
      datePattern: "YYYY-MM-DD", // Rotate logs daily
      maxFiles: "14d", // Keep logs for 14 days
      zippedArchive: true, // Compress old logs
    }),
  ],
});

// Add additional transport for errors if needed
logger.add(
  new DailyRotateFile({
    filename: "/src/logs/logs/error-%DATE%.log",
    level: "error",
    datePattern: "YYYY-MM-DD",
    maxFiles: "30d", // Retain error logs for 30 days
    zippedArchive: true,
  })
);

export default logger;
