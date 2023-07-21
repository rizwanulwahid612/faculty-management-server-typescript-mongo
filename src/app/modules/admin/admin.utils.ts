import { Admin } from './admin.model';

export const findLastAdminId = async (): Promise<string | undefined> => {
  const lastAdmin = await Admin.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastAdmin?.id ? lastAdmin?.id.substring(2) : undefined;
};

export const genereteAdminId = async (): Promise<string> => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `A-${incrementedId}`;
  //console.log(incrementedId);
  return incrementedId;
};
