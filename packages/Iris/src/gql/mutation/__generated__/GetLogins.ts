/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLogins
// ====================================================

export interface GetLogins_PadderLogins_landlord {
  __typename: "Landlord";
  /**
   * Primary key for database
   */
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export interface GetLogins_PadderLogins_tenant_household {
  __typename: "Household";
  /**
   * Primary key for database
   */
  id: string;
}

export interface GetLogins_PadderLogins_tenant {
  __typename: "Tenant";
  /**
   * Primary key for database
   */
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  /**
   * Description: Tenants who live in the household.
   */
  household: GetLogins_PadderLogins_tenant_household | null;
}

export interface GetLogins_PadderLogins {
  __typename: "PadderLogin";
  /**
   * Primary key for database
   */
  id: string;
  email: string | null;
  iosDeviceToken: (string | null)[] | null;
  androidDeviceToken: (string | null)[] | null;
  landlord: GetLogins_PadderLogins_landlord | null;
  tenant: GetLogins_PadderLogins_tenant | null;
}

export interface GetLogins {
  /**
   * All PadderLogins in the application matching the criteria in the args.
   */
  PadderLogins: (GetLogins_PadderLogins | null)[] | null;
}

export interface GetLoginsVariables {
  email?: string | null;
}
