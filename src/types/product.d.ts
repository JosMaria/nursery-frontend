export type Status = 'CONSERVATION' | 'AVAILABLE' | 'NON_EXISTENT';

export interface IdentificationResponseDTO {
  id: number,
  commonName: string,
  scientificName?: string,
  firstLetterLastname?: string,
  family?: string,
}

export interface ProductResponseDTO extends IdentificationResponseDTO {
  status: Status;
}
