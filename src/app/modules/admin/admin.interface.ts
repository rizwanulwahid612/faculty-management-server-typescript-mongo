import { Model, Types } from 'mongoose';

export type IAdmin = {
  id: string;
  title: string;
  name: string;
  role: string;
  academicFaculty: Types.ObjectId | IAdmin;
};
export type AdminModel = Model<IAdmin, Record<string, unknown>>;
export type IAdminFilters = {
  searchTerm?: string;
};
