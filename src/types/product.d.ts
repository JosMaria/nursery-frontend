export type Status = 'IN_CONSERVATION' | 'AVAILABLE' | 'NON_EXISTENT';
export type Classification = 'ORNAMENTAL' | 'FOREST' | 'INDUSTRIAL' | 'ALIMENTARY' | 'MEDICINAL' | 'EXOTIC' |
'CACTUS' | 'FRUITFUL' | 'GRASS' | 'SUCCULENT';

export type ClassificationType = 'cactus' | 'gross' | 'exotic' | 'fruit' | 'forest' |
'food' | 'industrial' | 'medicinal' | 'ornamental' | 'succulent' | 'all';

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

export interface CreatePlantDTO {
  commonName: string;
  scientificName: string;
  firstLetterLastname: string;
  family: string;
  status: string;
  classifications: Array<string>;
}