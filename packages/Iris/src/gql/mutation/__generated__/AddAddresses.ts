/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddAddresses
// ====================================================

export interface AddAddresses_AddAddresses {
  __typename: "Address";
  /**
   * Primary key for database
   */
  id: string;
}

export interface AddAddresses {
  /**
   * Adds a collection of Addresses.
   */
  AddAddresses: (AddAddresses_AddAddresses | null)[] | null;
}

export interface AddAddressesVariables {
  inputs?: (AddressAddInput | null)[] | null;
}
