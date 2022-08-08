/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OwnershipAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddOwnership
// ====================================================

export interface AddOwnership_AddOwnership_landlord {
  __typename: "Landlord";
  /**
   * Primary key for database
   */
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export interface AddOwnership_AddOwnership_realEstateProperty {
  __typename: "RealEstateProperty";
  /**
   * Primary key for database
   */
  id: string;
  name: string | null;
}

export interface AddOwnership_AddOwnership {
  __typename: "Ownership";
  /**
   * Primary key for database
   */
  id: string;
  startDate: any | null;
  endDate: any | null;
  landlord: AddOwnership_AddOwnership_landlord | null;
  realEstateProperty: AddOwnership_AddOwnership_realEstateProperty | null;
}

export interface AddOwnership {
  /**
   * Adds a collection of Ownership.
   */
  AddOwnership: (AddOwnership_AddOwnership | null)[] | null;
}

export interface AddOwnershipVariables {
  inputs?: (OwnershipAddInput | null)[] | null;
}
