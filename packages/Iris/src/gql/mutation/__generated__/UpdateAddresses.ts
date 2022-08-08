/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressUpdateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAddresses
// ====================================================

export interface UpdateAddresses_UpdateAddresses {
  __typename: "Address";
  /**
   * Primary key for database
   */
  id: string;
  postalCode: string | null;
  streetAddress: string | null;
  provinceState: string | null;
  country: string | null;
  city: string | null;
}

export interface UpdateAddresses {
  /**
   * Updates a collection of Addresses.
   */
  UpdateAddresses: (UpdateAddresses_UpdateAddresses | null)[] | null;
}

export interface UpdateAddressesVariables {
  inputs?: (AddressUpdateInput | null)[] | null;
}
