import { Request, Response } from "express";
import logger from "../app.logger";
import Subject from "../models/subject.model";

const add = (request: Request, response: Response) => {
  logger.info(`Addding a new subject: ${JSON.stringify(request.body)}`);

  if (request.body.name) {
    new Subject({ name: request.body.name })
      .save()
      .then((r) => {
        response.json(r);
      })
      .catch((e) => {
        logger.error(e);
        response.status(500).send("Something went wrong");
      });
  } else {
    response.status(500).send("Invalid subject name");
  }
};

const getAll = (_request: Request, response: Response) => {
  Subject.findAll()
    .then((subjects) => {
      response.json(subjects);
    })
    .catch((e: any) => {
      logger.error(e);
      response.status(500).send("Something went wrong");
    });
};

const update = async (request: Request, response: Response) => {
  if (request.body.name && request.body.id) {
    const subject = await Subject.findByPk(request.body.id);

    if (subject) {
      subject
        .update({ id: request.body.id, name: request.body.name })
        .then((r) => {
          response.json(r);
        })
        .catch((e) => {
          logger.error(e);
          response.status(500).send("Something went wrong");
        });
    }
  }

  response.status(500).send("Invalid subject provided");
};

export default { endpoint: "/subject", add, getAll, update };
