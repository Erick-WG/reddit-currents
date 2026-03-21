// calculate how many subscribers we have.
export const subsCount = (subs) => {    
    if(subs > 1000 && subs < 1000000) return `${Math.floor(subs/1000)}K`;
    if(subs > 1000000 && subs < 1000000000) return `${Math.floor(subs/1000000)}M`;
    if(subs > 1000000000) return `${Math.floor(subs/1000000000)}B`;
}