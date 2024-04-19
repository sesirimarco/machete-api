import { Request, Response } from 'express';
import { prisma } from '../prisma-client';

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await prisma.subject.findMany();
    res.json({ data: subjects });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};

export const getOneSubject = async (req: Request, res: Response) => {
  try {
    const subject = await prisma.subject.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.json({ data: subject });
  } catch (e) {
    res.json({ error: e.message });
  }
};

export const createSubject = async (req: Request, res: Response) => {
  try {
    const subjectCreated = await prisma.subject.create({
      data: req.body,
    });
    res.json({ data: subjectCreated });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const subjectUpdated = await prisma.subject.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.json({ data: subjectUpdated });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const subjectDeleted = await prisma.subject.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json({ data: subjectDeleted });
  } catch (e) {
    console.error(e);
    res.json({ error: e.message });
  }
};
