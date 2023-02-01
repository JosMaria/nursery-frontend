export type Status = 'IN_CONSERVATION' | 'AVAILABLE' | 'NON_EXISTENT';
export type Classification = 'CACTU' | 'CRASA' | 'EXOTICA' | 'FRUTAL' | 'FORESTAL' | 
'ALIMENTICIA' | 'INDUSTRIAL' | 'MEDICINAL' | 'ORNAMENTAL' | 'SUCULENTAL';

export interface IdentificationResponseDTO {
  id: number,
  commonName: string,
  scientificName?: string,
  firstLetterLastname?: string,
  family?: string,
  status: Status
}

export interface ProductResponseDTO extends IdentificationResponseDTO {
  
}
