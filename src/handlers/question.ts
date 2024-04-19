import { Request, Response } from 'express';
import { prisma } from '../prisma-client';

export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await prisma.question.findMany({
      where: {
        examId: req.params.examId,
      },
    });
    res.json({ data: questions });
  } catch (e) {
    res.json({ error: e.message });
  }
};

export const getOneQuestion = async (req: Request, res: Response) => {
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: req.params.id,
        examId: req.params.examId,
      },
    });
    res.json({ data: question });
  } catch (e) {
    res.json({ error: e.message });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const questionCreated = await prisma.question.create({
      data: req.body,
    });
    res.json({ data: questionCreated });
  } catch (e) {
    res.json({ error: e.message });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const questionUpdated = await prisma.question.update({
      where: {
        id: req.params.id,
        examId: req.params.examId,
      },
      data: req.body,
    });
    res.json({ data: questionUpdated });
  } catch (e) {
    res.json({ error: e.message });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const questionDeleted = await prisma.question.delete({
      where: {
        id: req.params.id,
        examId: req.params.examId,
      },
    });
    res.json({ data: questionDeleted });
  } catch (e) {
    res.json({ error: e.message });
  }
};
