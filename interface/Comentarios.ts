export interface Comments {
    etag: string
    items: ItemCom[]
    kind: string
    nextPageToken: string
    pageInfo: PageInfo
}
  
export interface ItemCom {
    etag: string
    id: string
    kind: ItemKind
    snippet: ItemSnippet
}
  
export enum ItemKind {
    YoutubeCommentThread = "youtube#commentThread",
}
  
export interface ItemSnippet {
    canReply: boolean
    isPublic: boolean
    topLevelComment: TopLevelComment
    totalReplyCount: number
    videoId: VideoID
}
  
export interface TopLevelComment {
    etag: string
    id: string
    kind: TopLevelCommentKind
    snippet: TopLevelCommentSnippet
}
  
export enum TopLevelCommentKind {
    YoutubeComment = "youtube#comment",
}
  
export interface TopLevelCommentSnippet {
    authorChannelId: AuthorChannelID
    authorChannelUrl: string
    authorDisplayName: string
    authorProfileImageUrl: string
    canRate: boolean
    likeCount: number
    publishedAt: Date
    textDisplay: string
    textOriginal: string
    updatedAt: Date
    videoId: VideoID
    viewerRating: ViewerRating
}
  
export interface AuthorChannelID {
    value: string
}
  
export enum VideoID {
    CIY95KCnnNk = "cIY95KCnnNk",
}
  
export enum ViewerRating {
    None = "none",
}
  
export interface PageInfo {
    resultsPerPage: number
    totalResults: number
  } 