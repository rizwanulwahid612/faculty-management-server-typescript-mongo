//import express, { Application, NextFunction, Request, Response } from 'express'
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import globalErrorHandeller from './app/middlewires/globalErrorHandeller';
import router from './app/routes';

const app: Application = express();

app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application router

app.use('/api/v1/', router);

//global error handller
app.use(globalErrorHandeller);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
