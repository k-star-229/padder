/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Households
// ====================================================

export interface Households_Households_maintenanceRequests {
  __typename: "MaintenanceRequest";
  /**
   * Primary key for database
   */
  id: string;
  description: string | null;
  date: any | null;
  location: string | null;
  photos: (string | null)[] | null;
}

export interface Households_Households_repayments_repaymentSplits {
  __typename: "RepaymentSplit";
  /**
   * Primary key for database
   */
  id: string;
  amount: number | null;
  split: number | null;
}

export interface Households_Households_repayments {
  __typename: "Repayment";
  /**
   * Primary key for database
   */
  id: string;
  repaymentNumber: string | null;
  amount: number | null;
  date: any | null;
  /**
   * Description: Number of days early (negative) or late (positive).
   */
  daysEarlyLate: number | null;
  /**
   * Description: Number of points acquired (if any).
   */
  karmaPoints: number | null;
  repaymentSplits: (Households_Households_repayments_repaymentSplits | null)[] | null;
}

export interface Households_Households_payments {
  __typename: "Payment";
  /**
   * Primary key for database
   */
  id: string;
  date: any | null;
}

export interface Households_Households {
  __typename: "Household";
  /**
   * Primary key for database
   */
  id: string;
  phoneNumber: string | null;
  maintenanceRequests: (Households_Households_maintenanceRequests | null)[] | null;
  repayments: (Households_Households_repayments | null)[] | null;
  payments: (Households_Households_payments | null)[] | null;
}

export interface Households {
  /**
   * All Households in the application matching the criteria in the args.
   */
  Households: (Households_Households | null)[] | null;
}

export interface HouseholdsVariables {
  householdsId?: string | null;
  phoneNumber?: string | null;
}
