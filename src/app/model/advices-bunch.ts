export class AdvicesBunch {
    total_results: number;
    query: string;
    slips: [{
        advice: string;
        slip_id: number;
    }];
}