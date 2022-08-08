/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Ownership
// ====================================================

export interface Ownership_Ownership_realEstateProperty_address {
  __typename: "Address";
  /**
   * Primary key for database
   */
  id: string;
  country: string | null;
  city: string | null;
  provinceState: string | null;
  postalCode: string | null;
  streetAddress: string | null;
}

export interface Ownership_Ownership_realEstateProperty {
  __typename: "RealEstateProperty";
  /**
   * Primary key for database
   */
  id: string;
  name: string | null;
  address: Ownership_Ownership_realEstateProperty_address | null;
}

export interface Ownership_Ownership {
  __typename: "Ownership";
  /**
   * Primary key for database
   */
  id: string;
  startDate: any | null;
  endDate: any | null;
  realEstateProperty: Ownership_Ownership_realEstateProperty | null;
}

export interface Ownership {
  /**
   * All Ownership in the application matching the criteria in the args.
   */
  Ownership: (Ownership_Ownership | null)[] | null;
}

export interface OwnershipVariables {
  ownershipId?: string | null;
  endDate?: any | null;
  landlordId?: number | null;
  startDate?: any | null;
  realEstatePropertyId?: number | null;
}
