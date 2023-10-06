import type { FC } from 'react';
import { getLImageUrl } from '../../utils/utils';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import usePopularPersons from '../../hooks/people/usePopularPersons';
import HotPersonSkeleton from '../../components/Skeleton/HotPersonSkeleton';

const HotPerson: FC = () => {

    const { data, isLoading } = usePopularPersons();
    
    const onePerson = data?.results?.at(0);

    return (
        (isLoading || !onePerson) ? (
            <HotPersonSkeleton />
        ) : (
            <article className='mt-0 text-black sm:mt-2 md:mt-5 hero' style={{ 
                backgroundImage: `url('${import.meta.env.BASE_URL}/images/movie_bg.jpg')`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',        
                backgroundSize: 'cover'
            }}>
                <div className="hero-overlay bg-opacity-60" />
                <section className='flex-col gap-0 2xs:flex-row hero-content md:flex-row-reverse lg:gap-20'>
                    <Image src={getLImageUrl(onePerson.profile_path as string)} className='max-w-xs m-0 rounded-lg shadow-2xl xs:m-2' alt={`${onePerson?.profile_path}-poster`}/>
                    <div className='h-full p-2 2xs:px-2 xs:px-5'>        
                        <div className='text-white sm:px-2 md:my-8'>
                            <p className='text-xs text-center xs:text-lg sm:text-left'>
                                높은 인기를 얻고 있는 배우  
                            </p>                        
                            <blockquote className='px-4 my-4 text-2xl text-center sm:text-5xl'>
                                <span>{onePerson?.name}</span>
                            </blockquote>
                        
                            <p className='text-xs text-center text-white sm:text-right xs:text-lg'>
                                을 소개합니다! 
                            </p>                                  
                        </div>
                        <div className='mt-6 text-center md:mt-3'>                   
                            <button className='rounded-md bg-teal-600 px-3 py-2 md:px-5 md:py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>
                                <Link to={`detail/${onePerson?.id}`}>
                                    {
                                        onePerson?.gender === 1 ? 'Who is She?' : onePerson?.gender === 2 ? 'Who is He?' : 'Who is this?'
                                    }
                                </Link>
                            </button>
                        </div>
                    </div>
                </section>
            </article>   
        )
        // <HotPersonSkeleton />
    );
};

export default HotPerson;