import { User } from "@auth0/auth0-angular";

export interface Venue {
  id: string;
  name: string;
  imageUri?: string;
  createdBy: User;
  createdOn: Date;
  modifiedBy?: User;
  modifiedOn?: Date;
}
