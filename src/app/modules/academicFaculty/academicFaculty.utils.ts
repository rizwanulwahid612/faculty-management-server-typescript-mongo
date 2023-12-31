import { AcademicFaculty } from './academicFaculty.model';

export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await AcademicFaculty.findOne(
    { role: 'faculty' },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastFaculty?.id ? lastFaculty?.id.substring(2) : undefined;
};

export const genereteFacultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `F-${incrementedId}`;
  //console.log(incrementedId);
  return incrementedId;
};
