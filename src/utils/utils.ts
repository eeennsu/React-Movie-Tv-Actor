import env from '../env';

// 포스터 & 백그라운드 이미지 url 사이즈별 얻어오는 경로
export const getXSImageUrl = (path: string) => `${env.VITE_TMDB_IMAGE_HOST}/w200${path}`;
export const getSImageUrl = (path: string) => `${env.VITE_TMDB_IMAGE_HOST}/w300${path}`;
export const getMImageUrl = (path: string) => `${env.VITE_TMDB_IMAGE_HOST}/w400${path}`;
export const getLImageUrl = (path: string) => `${env.VITE_TMDB_IMAGE_HOST}/w500${path}`;

// 사람 포스터 이미지 url
export const getPersonImageUrl = (personId: string) =>
    `${env.VITE_TMDB_API_HOST}/${env.VITE_TMDB_API_VERSION}/person/${personId}/images`;


// 소수 둘째자리 반올림
export const getRound = (vote: number): string => (Math.round(vote * 100) / 100).toString().padEnd(4, '0');


// 달러 둘째자리 반올림
export const formatterBudget = (budget: number): string => {
    const formatter = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'USD',
        // currencyDisplay: 'code',
        notation: 'compact'
    });

    return formatter.format(budget).replace(/(US\$|USD)/, '').concat('$');
}

// 배열 셔플, 하지만 일단 사용하는 곳은 없음
export const shuffleArray = (arr: any[], count: number) => {
    const shuffledArray = arr.sort(() => Math.random() -0.5);
    
    return shuffledArray.slice(0, count);
}