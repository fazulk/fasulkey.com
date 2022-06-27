export interface Resume {
  email: string
  url: string
  github: string
  location: string
  name: string
  objective: string
  languages: [string]
  experience: [Linear]
  education: [Linear]
  affiliations: [Linear]
}

export interface Linear {
  title: string
  subTitle: string
  location: string
  startDate: Date
  endDate: Date
  points: [string]
}

export interface Sorting extends Linear {
  sortDate: Date | null
}
