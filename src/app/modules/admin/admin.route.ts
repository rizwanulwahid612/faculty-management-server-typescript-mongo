import express from 'express';
import validateRequest from '../../middlewires/validateRequest';
import { AdminValidation } from './admin.validations';
import { AdminController } from './admin.controller';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(AdminValidation.createAdminZodSchema),
  AdminController.createAdmin,
);
router.get('/:id', AdminController.getSingleAdmin);
router.get('/', AdminController.getAllAdmin);
router.patch(
  '/:id',
  validateRequest(AdminValidation.updateadminZodSchema),
  AdminController.updateAdmin,
);
router.delete('/:id', AdminController.deleteAdmin);

export const AdminRoutes = router;

//http://localhost:5000/api/v1/academic-semesters/?sortBy=code&year&sortOrder=asc
//http://localhost:5000/api/v1/academic-semesters/?searcTerm=Autumn&page=1&limit=3
