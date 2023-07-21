import express from 'express';
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;