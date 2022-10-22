export interface Videos {
    etag: string
    items: Item[]
    kind: string
    nextPageToken: string
    pageInfo: PageInfo
  }
  
  export interface Item {
    etag: string
    id: string
    kind: string
    snippet: Snippet,
    statistics: Statistics,
  }
  
  export interface Snippet {
    channelId: string
    channelTitle: string
    defaultAudioLanguage: string
    description: string
    liveBroadcastContent: string
    localized: Localized
    publishedAt: Date
    tags?: string[]
    thumbnails: Thumbnails
    title: string
  }
  
  export interface Localized {
    description: string
    title: string
  }
  
  export interface Thumbnails {
    default: Default
    high: Default
    maxres?: Default
    medium: Default
    standard?: Default
  }
  
  export interface Default {
    height: number
    url: string
    width: number
  }
  
  export interface PageInfo {
    resultsPerPage: number
    totalResults: number
  }
  
  export interface Statistics {
    commentCount?: string
    favoriteCount: string
    likeCount?: string
    viewCount: string
  }