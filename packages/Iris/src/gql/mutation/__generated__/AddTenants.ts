/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TenantAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddTenants
// ====================================================

export interface AddTenants_AddTenants {
  __typename: "Tenant";
  /**
   * Primary key for database
   */
  id: string;
  firstName: string | null;
  verified: boolean | null;
  lastName: string | null;
  email: string | null;
}

export interface AddTenants {
  /**
   * Adds a collection of Tenants.
   */
  AddTenants: (AddTenants_AddTenants | null)[] | null;
}

export interface AddTenantsVariables {
  inputs?: (TenantAddInput | null)[] | null;
}
