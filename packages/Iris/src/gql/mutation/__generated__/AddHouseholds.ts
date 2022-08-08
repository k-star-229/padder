/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HouseholdAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddHouseholds
// ====================================================

export interface AddHouseholds_AddHouseholds {
  __typename: "Household";
  /**
   * Primary key for database
   */
  id: string;
  phoneNumber: string | null;
}

export interface AddHouseholds {
  /**
   * Adds a collection of Households.
   */
  AddHouseholds: (AddHouseholds_AddHouseholds | null)[] | null;
}

export interface AddHouseholdsVariables {
  inputs?: (HouseholdAddInput | null)[] | null;
}
