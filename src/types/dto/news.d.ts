export interface CreateNewsDTO {
  title: string
  description: string
}

export interface NewsResponseDTO {
  id: number
  urlImage: string
  title: string
  description: string
}

export interface PageNewsResponseDTO {
  content: Array<NewsResponseDTO>
}
