import type { FC } from 'react';
import { getLImageUrl } from '../../utils/utils';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import usePopularPersons from '../../hooks/people/usePopularPersons';

const HotPerson: FC = () => {

    const { data } = usePopularPersons();
 
    const onePerson = data?.results.at(0);

    return (
        <div className='mt-5 text-black hero' style={{ 
            backgroundImage: `url('/images/movie_bg.jpg')`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',        
            backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='flex-col hero-content md:flex-row-reverse lg:gap-20'>
                <Image src={onePerson && getLImageUrl(onePerson.profile_path as string)} className='max-w-sm rounded-lg shadow-2xl' alt={`${onePerson?.profile_path}-poster`}/>
                <div>
                    <h1 className='text-5xl font-bold text-white'>{onePerson?.name}</h1>
                    <div className='p-4 my-5 mb-4 text-white rounded-2xl'>
                        <p>
                            높은 인기를 얻고 있는 배우  
                        </p>                        
                        <blockquote className='relative mx-4 my-6 italic text-center'>
                            <span className='p-5 after:absolute after:bottom-0 after:right-0 after:translate-x-2 after:translate-y-4 after:content-["」"]  after:text-5xl text-3xl font-bold  before:absolute before:top-0 before:left-0 before:content-["「"] before:-translate-x-2 before:-translate-y-3 before:text-5xl '>{onePerson?.name}</span>
                        </blockquote>  
                        <p className='text-right text-white'>
                            을 소개합니다! 
                        </p>                                  
                    </div>
                    <div className='text-center'>                   
                        <button className='rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>
                            <Link to={`detail/${onePerson?.id}`}>
                                {
                                    onePerson?.gender === 1 ? 'Who is She?' : onePerson?.gender === 2 ? 'Who is He?' : 'Who is this?'
                                }
                            </Link>       
                        </button>                   
                    </div>             
                </div>
            </div>
        </div>
    );
};

export default HotPerson;