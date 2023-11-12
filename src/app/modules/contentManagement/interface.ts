/* eslint-disable no-unused-vars */
export enum ENUM_CONTENT_VISIBILITY_STATUS {
  VISIBLE = 'visible',
  INVISIBLE = 'Invisible',
}

export type IContentManagement = {
  title: string;
  status: ENUM_CONTENT_VISIBILITY_STATUS;
};
