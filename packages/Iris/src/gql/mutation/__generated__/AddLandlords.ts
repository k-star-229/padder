/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LandlordAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddLandlords
// ====================================================

export interface AddLandlords_AddLandlords {
  __typename: "Landlord";
  firstName: string | null;
  /**
   * Primary key for database
   */
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
}

export interface AddLandlords {
  /**
   * Adds a collection of Landlords.
   */
  AddLandlords: (AddLandlords_AddLandlords | null)[] | null;
}

export interface AddLandlordsVariables {
  inputs?: (LandlordAddInput | null)[] | null;
}
