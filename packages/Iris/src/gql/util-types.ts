export interface Property {
	name: string
	id: string
	description: string
	comment: string
	metaproperties: Metaproperty[]
	attributeValues: AttributeValue[]
	valueObject: ValueObject
}

export interface AttributeValue {
	id: string
	value: string
	attribute: TypeClass
}

export interface TypeClass {
	id: string
	name: string
}

export interface Metaproperty {
	name: string
	id: string
	comment: null
	description: null
	apiDescription: null
	apiUrl: null
	attributes: AttributeElement[]
}

export interface AttributeElement {
	name: string
	description: string
	id: string
	type: TypeClass
}

export interface ValueObject {
	name: string
	id: string
}
