import { Request, Response } from 'express';
import { prisma } from '../prisma-client';

export const getAllExams = async (req: Request, res: Response) => {
  try {
    const exams = await prisma.exam.findMany({
      where: {
        subjectId: req.params.subjectId,
      },
    });
    res.json({ data: exams });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};

export const getOneExam = async (req: Request, res: Response) => {
  try {
    const exam = await prisma.exam.findUnique({
      where: {
        id: req.params.id,
        subjectId: req.params.subjectId,
      },
    });
    res.json({ data: exam });
  } catch (e) {
    res.json({ error: e.message });
  }
};

export const createExam = async (req: Request, res: Response) => {
  try {
    const examCreated = await prisma.exam.create({
      data: req.body,
    });
    res.json({ data: examCreated });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};

export const updateExam = async (req: Request, res: Response) => {
  try {
    const examUpdated = await prisma.exam.update({
      where: {
        id: req.params.id,
        subjectId: req.params.subjectId,
      },
      data: req.body,
    });
    res.json({ data: examUpdated });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};

export const deleteExam = async (req: Request, res: Response) => {
  try {
    const examDeleted = await prisma.exam.delete({
      where: {
        id: req.params.id,
        subjectId: req.params.subjectId,
      },
    });
    res.json({ data: examDeleted });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};
