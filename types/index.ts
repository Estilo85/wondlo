export interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
    isVerified: boolean;
    createdAt: string;
}

export interface OperatorSummary {
    id: number;
    name: string;
    website?: string;
    socialHandle?: string;
    safetyScore?: number;
    riskLevel?: string;
    incidentHistory?: string;
    adventureType?: string;
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