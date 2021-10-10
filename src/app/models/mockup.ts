export interface Mockups {
    message: string | null;
    data?: (ResultEntity)[] | null;
    type: string | null;
}

export interface ResultEntity{
    items?: (results)[] | null;
    page: number;
    total: number;
    pages: number;
    perpage: number;
}

export interface results{
    [x: string]: any;
    id: number;
    name: string;
    categoryId: number;
    locationId: number;
    neighbourhoodId: null;
    subCategoryId: number;
    description: string;
    price: number;
    userId: number;
    phone: string;
    isFavourite: boolean;
    canContactOnWhatsApp: boolean;
    isAvailableForChat: boolean;
    otp: null;
    isFeatured: boolean;
    featuredUntil: null;
    refreshedAt: string;
    isOverride: boolean;
    bannerImageId: string;
    bannerImageSize: null;
    status: string;
    isVerified: boolean;
    approvedAt: string;
    expiredAt: null;
    rejectedAt: null;
    mongoId: null;
    deletedAt: null;
    createdAt: string;
    updatedAt: string;
    bannerImage?: (BannerImage)[] | null;
    subCategory?: (Subcategory)[] | null;
    category?: (Category)[] | null;
    location?: (Location)[] | null;
    user: (User)[] | null;
        
}

export interface BannerImage{
    id: number;
    name: string;
    s3Key: string;
    type: string;
    localPath: null;
    createdAt: string;
    updatedAt: string;
    url: string;
}

export interface Subcategory{
    id: number;
    parentId: number;
    mongoId: string;
    name: string;
    arabicName: string;
    thumbnailId: 76317;
    displayOrder: 33;
    deletedAt: null;
}

export interface Category{
    id: number;
    parentId: null;
    mongoId: string;
    name: string;
    arabicName: string;
    thumbnailId: number;
    displayOrder: number;
    deletedAt: null;
}

export interface Location{
    id: number;
    name: string;
    arabicName: string;
    isCapital: boolean;
    mongoId: string;
    displayOrder: number;
    createdAt: string;
    updatedAt: string;
}

export interface User{
    id: number;
    firstName: null;
    lastName: null;
    email: null;
    phone: number;
    isDealer: boolean;
    lastLoginAt: null;
    lastActivityAt: null;
    dateOfBirth: null;
    availableFeatureCount: number;
    availableRefreshesCount: number;
    mongoId: null;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
    userPreferences: null;
}