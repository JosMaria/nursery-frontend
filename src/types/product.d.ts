export type Status = 'IN_CONSERVATION' | 'AVAILABLE' | 'NON_EXISTENT';
export type Classification = 'cactu' | 'crasa' | 'exotica' | 'frutal' | 'forestal' |
	'alimenticia' | 'industrial' | 'medicinal' | 'ornamental' | 'suculental' | 'todo';

export interface IdentificationResponseDTO {
	id: number,
	commonName: string,
	scientificName?: string,
	firstLetterLastname?: string,
	family?: string,
	status: Status
}

export interface ProductResponseDTO extends IdentificationResponseDTO {
	urlPicture: string
}
export interface SingleProductResponseDTO extends IdentificationResponseDTO {
	urlPicture: Array<string>
}
