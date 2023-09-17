import type { FC, ChangeEvent } from 'react';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { message } from 'antd';
import useSearchSelectStore from '../../zustand/search/useSearchSelectStore';
import { SelectStoreType, SelectType } from '../../zustand/search/types';
import useSearchMovie from '../../hooks/movie/useSearchMovie';
import useSearchTv from '../../hooks/tv/useSearchTv';
import useSearchPerson from '../../hooks/people/useSearchPerson';
import { useNavigate } from 'react-router-dom';
import useSerachResultStore from '../../zustand/search/useSerachResultStore';
import SearchList from './AutoCompleteList';
import { SearchMovieResponse } from '../../apis/types/movieTypes';
import { SearchTvResponse } from '../../apis/types/tvTypes';
import { SearchPersonResponse } from '../../apis/types/personTypes';
import useSearchAutoListStore from '../../zustand/search/useSearchAutoListStore';
import { SearchOutlined } from '@ant-design/icons';

const SearchField: FC = () => {

    const navigate = useNavigate();
     
    const [text, setText] = useState<string>('');
    const deferredText = useDeferredValue(text);

    const { select, setSelect, setFetchedSucSelect } = useSearchSelectStore();
    const { setSearchKeyword, setResults } = useSerachResultStore();
    const { visible, setVisible } = useSearchAutoListStore();

    const { data: searchMovieData, isSuccess: isSucMovie } = useSearchMovie(deferredText, select);
    const { data: searchTvData, isSuccess: isSucTv } = useSearchTv(deferredText, select);
    const { data: searchPersonData, isSuccess: isSucPerson } = useSearchPerson(deferredText, select);

    // select bar 체인지
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value as SelectType);
    }

    // 검색창의 텍스트가 변경될 때마다 호출, 
    // 이곳에서 데이터 패칭 관련 로직을 작성하는 것은 안된다. change 이벤트는 바로바로 일어나지만 비동기 로직은 약간의 로딩시간이 있으므로, 오류가 발생할 수 있다. 
    // 때문에 useEffect()에서 데이터 패칭 관련 로직을 구현한다.
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);    
        setText(e.target.value);     
        !visible && setVisible(true);      
    }

    // fetch해온 결과를 select type에 맞게 zustand의 result state에 새팅해준다. keyword변경이 일어날 때, 검색 버튼을 클릭할 때, 엔터를 클릭할 때 같이 호출되므로 함수로 세팅
    const resultSetting = () => {
        switch (select) {
            case 'movie' :
                setResults(searchMovieData?.results as SearchMovieResponse['results']);

                break;
            
            case 'tv': 
                setResults(searchTvData?.results as SearchTvResponse['results']);

                break;;

            case 'person': 
                setResults(searchPersonData?.results as SearchPersonResponse['results']);

                break;;

            default: 
                throw new Error('select가 일치되지 않습니다.');
        }
    }

    // 검색 버튼 클릭 or 엔터 클릭 시 호출
    const doSearch = () => {
        if (deferredText.length <= 1) {
            message.warning('두 글자 이상 입력해주세요');
            return;
        }
        
        setSearchKeyword(deferredText);
        setVisible(false);
       
        resultSetting();
        
        navigate(`search/result/${select}`);
    }

    const searchAutoCompleteList = useMemo(() => (
        <SearchList 
            movieResults={searchMovieData?.results} 
            tvResults={searchTvData?.results}
            personResults={searchPersonData?.results}
        />
    ), [searchMovieData?.results, searchTvData?.results, searchPersonData?.results]);

    // 검색 결과 페이지에서 select 타입이 바뀔 때마다 결과창의 헤더가 매번 바뀌는 것이 아닌, fetch가 성공했을 때만 변경되는 것이 자연스러으므로 세팅해준다.
    useIsFetchSucSelectUpdate(isSucMovie, isSucTv, isSucPerson, setFetchedSucSelect);

    // 검색 입력창이 바뀔 때마다 fetch 되온 결과를 zustand result state에 select type에 따라 알맞게 세팅해준다.
    useEffect(resultSetting, [setSearchKeyword, setResults, select, searchMovieData, searchTvData, searchPersonData]);

    return (
        <div>
            <div className='flex items-center'>
                <div className='w-36 h-11'>
                    <select value={select} onChange={handleSelectChange} className="w-full h-full text-sm text-gray-700 border-gray-300 rounded-l-lg">
                        <option value={'movie'}>Movie</option>
                        <option value={'tv'}>TV</option>
                        <option value={'person'}>People</option>
                    </select>
                </div>
               
                <div className="relative w-full h-11">                 
                    <input
                        value={text}
                        onChange={handleTextChange}                        
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        minLength={2}
                        maxLength={20}
                        className="w-full h-full py-2 text-sm transition border-gray-200 rounded-r-lg shadow-sm md:textarea-md hover:bg-gray-200 active:border-1"
                        onKeyDown={(e) => e.key === 'Enter' && doSearch()}
                    />
                    <span className="absolute inset-y-0 grid w-10 end-0 place-content-center">                        
                        <button onClick={doSearch} type="button" className="text-gray-600 hover:text-gray-700">
                            <SearchOutlined />
                        </button>
                    </span>
                </div>                       
            </div>        
            <div className='relative' >
                {searchAutoCompleteList}
            </div>                    
        </div> 
    );
};

export default SearchField;


// useEffect custom hook 

const useIsFetchSucSelectUpdate = (isSucMovie: boolean, isSucTv: boolean, isSucPerson: boolean, setFetchedSucSelect: SelectStoreType['setFetchedSucSelect']) => {
    
    useEffect(() => {
        isSucMovie && setFetchedSucSelect('movie');
        isSucTv && setFetchedSucSelect('tv');
        isSucPerson && setFetchedSucSelect('person');
    }, [isSucMovie, isSucTv, isSucPerson, setFetchedSucSelect]);

    return null;
}