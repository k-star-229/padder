/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RealEstateProperties
// ====================================================

export interface RealEstateProperties_RealEstateProperties_address {
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

export interface RealEstateProperties_RealEstateProperties_ownerships {
  __typename: "Ownership";
  /**
   * Primary key for database
   */
  id: string;
  startDate: any | null;
  endDate: any | null;
}

export interface RealEstateProperties_RealEstateProperties_households {
  __typename: "Household";
  /**
   * Primary key for database
   */
  id: string;
  phoneNumber: string | null;
}

export interface RealEstateProperties_RealEstateProperties {
  __typename: "RealEstateProperty";
  /**
   * Primary key for database
   */
  id: string;
  name: string | null;
  address: RealEstateProperties_RealEstateProperties_address | null;
  ownerships: (RealEstateProperties_RealEstateProperties_ownerships | null)[] | null;
  /**
   * Description: Past and present properties. Convenience relationship. We could use tenant agreements for this.
   */
  households: (RealEstateProperties_RealEstateProperties_households | null)[] | null;
}

export interface RealEstateProperties {
  /**
   * All RealEstateProperties in the application matching the criteria in the args.
   */
  RealEstateProperties: (RealEstateProperties_RealEstateProperties | null)[] | null;
}

export interface RealEstatePropertiesVariables {
  realEstatePropertiesId?: string | null;
  name?: string | null;
  addressId?: number | null;
}
