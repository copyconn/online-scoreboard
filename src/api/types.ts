export interface MatchInformation {
    current: boolean;
    date: Date;
    id: number;
    leftTeam: {
        id: number;
        name: string;
        score: number;
    };
    period: number;
    rightTeam: {
        id: number;
        name: string;
        score: number;
    };
}