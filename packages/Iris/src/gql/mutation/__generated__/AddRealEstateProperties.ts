/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RealEstatePropertyAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddRealEstateProperties
// ====================================================

export interface AddRealEstateProperties_AddRealEstateProperties_address {
  __typename: "Address";
  /**
   * Primary key for database
   */
  id: string;
  provinceState: string | null;
  postalCode: string | null;
}

export interface AddRealEstateProperties_AddRealEstateProperties_ownerships {
  __typename: "Ownership";
  /**
   * Primary key for database
   */
  id: string;
}

export interface AddRealEstateProperties_AddRealEstateProperties_households {
  __typename: "Household";
  /**
   * Primary key for database
   */
  id: string;
}

export interface AddRealEstateProperties_AddRealEstateProperties {
  __typename: "RealEstateProperty";
  /**
   * Primary key for database
   */
  id: string;
  name: string | null;
  address: AddRealEstateProperties_AddRealEstateProperties_address | null;
  ownerships: (AddRealEstateProperties_AddRealEstateProperties_ownerships | null)[] | null;
  /**
   * Description: Past and present properties. Convenience relationship. We could use tenant agreements for this.
   */
  households: (AddRealEstateProperties_AddRealEstateProperties_households | null)[] | null;
}

export interface AddRealEstateProperties {
  /**
   * Adds a collection of RealEstateProperties.
   */
  AddRealEstateProperties: (AddRealEstateProperties_AddRealEstateProperties | null)[] | null;
}

export interface AddRealEstatePropertiesVariables {
  inputs?: (RealEstatePropertyAddInput | null)[] | null;
}
