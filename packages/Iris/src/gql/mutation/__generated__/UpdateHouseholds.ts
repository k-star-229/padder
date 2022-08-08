/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HouseholdUpdateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateHouseholds
// ====================================================

export interface UpdateHouseholds_UpdateHouseholds {
  __typename: "Household";
  /**
   * Primary key for database
   */
  id: string;
  phoneNumber: string | null;
}

export interface UpdateHouseholds {
  /**
   * Updates a collection of Households.
   */
  UpdateHouseholds: (UpdateHouseholds_UpdateHouseholds | null)[] | null;
}

export interface UpdateHouseholdsVariables {
  inputs?: (HouseholdUpdateInput | null)[] | null;
}
