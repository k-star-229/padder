/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetKlEntities
// ====================================================

export interface GetKlEntities_KLEntities_relationshipTargets_source {
  __typename: "KLEntity";
  name: string;
  mutex: boolean | null;
  pluralName: string;
}

export interface GetKlEntities_KLEntities_relationshipTargets_target {
  __typename: "KLEntity";
  name: string;
  mutex: boolean | null;
  pluralName: string;
}

export interface GetKlEntities_KLEntities_relationshipTargets_metarelationships {
  __typename: "KLMetarelationship";
  name: string;
}

export interface GetKlEntities_KLEntities_relationshipTargets {
  __typename: "KLRelationship";
  maxPerEnum: number | null;
  sourceName: string;
  targetName: string;
  source: GetKlEntities_KLEntities_relationshipTargets_source;
  target: GetKlEntities_KLEntities_relationshipTargets_target;
  metarelationships: (GetKlEntities_KLEntities_relationshipTargets_metarelationships | null)[] | null;
}

export interface GetKlEntities_KLEntities_relationshipSources_source {
  __typename: "KLEntity";
  name: string;
  mutex: boolean | null;
  pluralName: string;
}

export interface GetKlEntities_KLEntities_relationshipSources_target {
  __typename: "KLEntity";
  name: string;
  mutex: boolean | null;
  pluralName: string;
}

export interface GetKlEntities_KLEntities_relationshipSources_metarelationships {
  __typename: "KLMetarelationship";
  name: string;
}

export interface GetKlEntities_KLEntities_relationshipSources {
  __typename: "KLRelationship";
  maxPerEnum: number | null;
  sourceName: string;
  targetName: string;
  source: GetKlEntities_KLEntities_relationshipSources_source;
  target: GetKlEntities_KLEntities_relationshipSources_target;
  metarelationships: (GetKlEntities_KLEntities_relationshipSources_metarelationships | null)[] | null;
}

export interface GetKlEntities_KLEntities_properties_metaproperties_attributes_type {
  __typename: "KLAttributeType";
  name: string;
  id: string;
}

export interface GetKlEntities_KLEntities_properties_metaproperties_attributes {
  __typename: "KLPropertyAttribute";
  name: string;
  description: string | null;
  id: string;
  type: GetKlEntities_KLEntities_properties_metaproperties_attributes_type | null;
}

export interface GetKlEntities_KLEntities_properties_metaproperties {
  __typename: "KLMetaproperty";
  name: string;
  id: string;
  comment: string | null;
  description: string | null;
  apiDescription: string | null;
  apiUrl: string | null;
  attributes: (GetKlEntities_KLEntities_properties_metaproperties_attributes | null)[] | null;
}

export interface GetKlEntities_KLEntities_properties_attributeValues_attribute {
  __typename: "KLPropertyAttribute";
  id: string;
  name: string;
}

export interface GetKlEntities_KLEntities_properties_attributeValues {
  __typename: "KLPropertyAttributeValue";
  id: string;
  value: string;
  attribute: GetKlEntities_KLEntities_properties_attributeValues_attribute | null;
}

export interface GetKlEntities_KLEntities_properties_valueObject {
  __typename: "KLValueObject";
  id: string;
  name: string;
}

export interface GetKlEntities_KLEntities_properties {
  __typename: "KLProperty";
  name: string;
  id: string;
  description: string | null;
  comment: string | null;
  seqno: number | null;
  mutex: boolean | null;
  metaproperties: (GetKlEntities_KLEntities_properties_metaproperties | null)[] | null;
  attributeValues: (GetKlEntities_KLEntities_properties_attributeValues | null)[] | null;
  valueObject: GetKlEntities_KLEntities_properties_valueObject;
}

export interface GetKlEntities_KLEntities {
  __typename: "KLEntity";
  name: string;
  id: string;
  pluralName: string;
  relationshipTargets: (GetKlEntities_KLEntities_relationshipTargets | null)[] | null;
  relationshipSources: (GetKlEntities_KLEntities_relationshipSources | null)[] | null;
  properties: (GetKlEntities_KLEntities_properties | null)[] | null;
}

export interface GetKlEntities {
  KLEntities: (GetKlEntities_KLEntities | null)[] | null;
}
