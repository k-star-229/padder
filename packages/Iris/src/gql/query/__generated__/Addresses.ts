/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Addresses
// ====================================================

export interface Addresses_Addresses {
  __typename: "Address";
  /**
   * Primary key for database
   */
  id: string;
  country: string | null;
  postalCode: string | null;
  streetAddress: string | null;
  provinceState: string | null;
  city: string | null;
}

export interface Addresses {
  /**
   * All Addresses in the application matching the criteria in the args.
   */
  Addresses: (Addresses_Addresses | null)[] | null;
}

export interface AddressesVariables {
  addressesId?: string | null;
}
