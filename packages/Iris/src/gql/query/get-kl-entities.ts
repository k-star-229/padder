import {
	DocumentNode,
	OperationVariables,
	QueryResult,
	gql,
	useQuery,
} from "@apollo/client"

import { GetKlEntities } from "./__generated__/GetKlEntities"

export const useGetKlEntities = (): QueryResult<
	GetKlEntities,
	OperationVariables
> => {
	const GET_KL_ENTITIES = gql`
		query GetKlEntities {
			KLEntities {
				name
				id
				pluralName
				relationshipTargets {
					maxPerEnum
					sourceName
					targetName
					source {
						name
						mutex
						pluralName
					}
					target {
						name
						mutex
						pluralName
					}
					metarelationships {
						name
					}
				}
				relationshipSources {
					maxPerEnum
					sourceName
					targetName
					source {
						name
						mutex
						pluralName
					}
					target {
						name
						mutex
						pluralName
					}
					metarelationships {
						name
					}
				}
				properties {
					name
					id
					description
					comment
					seqno
					mutex
					metaproperties {
						name
						id
						comment
						description
						apiDescription
						apiUrl
						attributes {
							name
							description
							id
							type {
								name
								id
							}
						}
					}
					attributeValues {
						id
						value
						attribute {
							id
							name
						}
					}
					valueObject {
						id
						name
						__typename
					}
				}
			}
		}
	`
	return useQuery<GetKlEntities>(GET_KL_ENTITIES as DocumentNode)
}
