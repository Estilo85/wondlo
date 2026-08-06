export interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
    isVerified: boolean;
    createdAt: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    firebaseUid?: string;
    status?: 'PENDING' | 'ACTIVE';
    freeSearchesRemaining?: number;
    isPaidUser?: boolean;
}