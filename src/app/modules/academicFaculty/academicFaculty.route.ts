import express from 'express';
import validateRequest from '../../middlewires/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validations';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty,
);
router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.get('/', AcademicFacultyController.getAllFaculties);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updatefacultyZodSchema),
  AcademicFacultyController.updateFaculty,
);
router.delete('/:id', AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRoutes = router;

//http://localhost:5000/api/v1/academic-semesters/?sortBy=code&year&sortOrder=asc
//http://localhost:5000/api/v1/academic-semesters/?searcTerm=Autumn&page=1&limit=3
