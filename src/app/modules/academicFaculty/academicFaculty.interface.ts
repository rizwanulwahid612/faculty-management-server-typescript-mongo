import { Model } from 'mongoose';

export type IAcademicFaculty = {
  id: string;
  title: string;
  name: string;
  role: string;
};
export type AcademicFacultyModel = Model<
  IAcademicFaculty,
  Record<string, unknown>
>;
export type IAcademicFacultyFilters = {
  searchTerm?: string;
};
