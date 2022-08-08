/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Comment: Import from common once clients are on separate git repos.
 */
export interface AddressAddInput {
  provinceState?: string | null;
  streetAddress?: string | null;
  country?: string | null;
  city?: string | null;
  postalCode?: string | null;
}

/**
 * Comment: Import from common once clients are on separate git repos.
 */
export interface AddressUpdateInput {
  id: string;
  provinceState?: string | null;
  streetAddress?: string | null;
  country?: string | null;
  city?: string | null;
  postalCode?: string | null;
}

/**
 * Description: Households have tenant.
 */
export interface HouseholdAddInput {
  phoneNumber?: string | null;
  realEstatePropertiesIds?: (number | null)[] | null;
  tenantsIds?: (number | null)[] | null;
  paymentsIds?: (number | null)[] | null;
  repaymentsIds?: (number | null)[] | null;
  maintenanceRequestsIds?: (number | null)[] | null;
  tenantAgreementsIds?: (number | null)[] | null;
  loansIds?: (number | null)[] | null;
  invitationsIds?: (number | null)[] | null;
}

/**
 * Description: Households have tenant.
 */
export interface HouseholdUpdateInput {
  id: string;
  phoneNumber?: string | null;
  realEstatePropertiesIds?: (number | null)[] | null;
  tenantsIds?: (number | null)[] | null;
  paymentsIds?: (number | null)[] | null;
  repaymentsIds?: (number | null)[] | null;
  maintenanceRequestsIds?: (number | null)[] | null;
  tenantAgreementsIds?: (number | null)[] | null;
  loansIds?: (number | null)[] | null;
  invitationsIds?: (number | null)[] | null;
}

export interface LandlordAddInput {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  tenantAgreementsIds?: (number | null)[] | null;
  ownershipsIds?: (number | null)[] | null;
  invitationsIds?: (number | null)[] | null;
}

export interface MaintenanceRequestAddInput {
  date?: any | null;
  description?: string | null;
  location?: string | null;
  photos?: (string | null)[] | null;
  householdId?: number | null;
  maintenanceRequestStateId?: number | null;
  tenantId?: number | null;
}

/**
 * Description: Period of ownership of a property by a landlord.
 */
export interface OwnershipAddInput {
  startDate?: any | null;
  endDate?: any | null;
  landlordId?: number | null;
  realEstatePropertyId?: number | null;
}

/**
 * Description: A customer, vet, vet tech, front desk admin, etc.
 * Comment: TODO: Extends common login after projects are split.
 */
export interface PadderLoginAddInput {
  androidDeviceToken?: (string | null)[] | null;
  iosDeviceToken?: (string | null)[] | null;
  email?: string | null;
  tenantId?: number | null;
  landlordId?: number | null;
}

/**
 * Description: A customer, vet, vet tech, front desk admin, etc.
 * Comment: TODO: Extends common login after projects are split.
 */
export interface PadderLoginUpdateInput {
  id: string;
  androidDeviceToken?: (string | null)[] | null;
  iosDeviceToken?: (string | null)[] | null;
  email?: string | null;
  tenantId?: number | null;
  landlordId?: number | null;
}

export interface RealEstatePropertyAddInput {
  name?: string | null;
  addressId?: number | null;
  ownershipsIds?: (number | null)[] | null;
  invitationsIds?: (number | null)[] | null;
  householdsIds?: (number | null)[] | null;
}

export interface TenantAddInput {
  firstName?: string | null;
  lastName?: string | null;
  verified?: boolean | null;
  approved?: boolean | null;
  email?: string | null;
  phoneNumber?: string | null;
  driversLicenseFront?: string | null;
  driversLicenseBack?: string | null;
  tenantAgreementImage?: string | null;
  householdId?: number | null;
  paymentSplitsIds?: (number | null)[] | null;
  repaymentSplitsIds?: (number | null)[] | null;
  tenantAgreementSplitsIds?: (number | null)[] | null;
  loanSplitsIds?: (number | null)[] | null;
  maintenanceRequestsIds?: (number | null)[] | null;
  invitationsIds?: (number | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
