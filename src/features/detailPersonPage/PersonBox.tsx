import type { FC } from 'react';
import { DetailPerson } from '../../apis/types/personTypes';
import { Descriptions, Image, Tooltip } from 'antd';
import type { DescriptionsProps } from 'antd';
import { getLImageUrl } from '../../utils/utils';
import ManIcon from '../../components/GenderIcons/ManIcon';
import WomanIcon from '../../components/GenderIcons/WomanIcon';
import UnknownGenderIcon from '../../components/GenderIcons/UnknownGenderIcon';
import dayjs from 'dayjs';

interface Props{
    personData?: DetailPerson;
}

const PersonBox: FC<Props> = ({ personData }) => {
    const birthday = dayjs(personData?.birthday);
    const deathday = dayjs(personData?.deathday);

    // const items: DescriptionsProps['items'] = [
    //     { 
    //         key: 1,
    //         label: 'gender',
    //         children: personData?.gender === 1 ? <WomanIcon /> : personData?.gender === 2 ? <ManIcon /> : <UnknownGenderIcon />,
    //     },
    //     {
    //         key: 2,
    //         label: 'birthday',
    //         children: birthday.format('YYYY / MM - DD')
    //     },
    //     {
    //         key: 3,
    //         label: 'role',
    //         children: personData?.known_for_department
    //     },
    //     {
    //         key: 4,
    //         label: 'place of birth',
    //         children: personData?.place_of_birth
    //     },
    //     {
    //         key: 5,
    //         label: 'popularity',
    //         children: personData?.popularity
    //     }
    // ];

    return ( 
        <article className='flex flex-col mt-4 sm:flex-row '>
            <div className='flex'>
                <Image className='w-full h-full' src={personData && getLImageUrl(personData.profile_path)}/>
            </div>            
            <div className='flex flex-col items-center w-full mt-6 lg:mt-0 justify-evenly'>
                <h1 className='text-3xl font-bold md:text-6xl'>
                    {personData?.name}  
                </h1>
                {
                    personData ? (
                        <div className='grid w-9/12 grid-cols-2 text-center text-md gap-x-0'>
                            <div className='py-3 border-b border-b-amber-600'>gender</div>
                                <div className='py-3 border-b border-b-amber-600'>{personData?.gender === 1 ? <WomanIcon /> : personData?.gender === 2 ? <ManIcon /> : <UnknownGenderIcon />}</div>
                            
                                <div className='py-3 border-b border-b-amber-600'>birthday</div>
                                <div className='flex justify-center py-3 border-b border-b-amber-600'>
                                    <div className="hidden sm:block badge badge-accent badge-outline">{birthday.format('YYYY - MM / DD')}</div>
                                    <div className='block sm:hidden'>
                                        {birthday.format('YYYY - MM / DD')}
                                    </div>
                                </div>                      
                                {
                                    personData?.deathday ? (
                                        <>
                                            <div className='py-3 border-b border-b-amber-600'>
                                                deathday
                                            </div>
                                            <div className='py-3 border-b border-b-amber-600'>
                                                {deathday.format('YYYY / MM - DD')}
                                            </div>
                                        </>                            
                                    ) : null
                                }
                                        
                            <div className='py-3 border-b border-b-amber-600'>role</div>
                            <div className='py-3 border-b border-b-amber-600'>{personData?.known_for_department}</div>
                        
                            <div className='py-3 border-b border-b-amber-600'>place of birth</div>
                            <div className='py-3 border-b border-b-amber-600'>{personData?.place_of_birth}</div>
                            
                            <div className='py-3 border-b border-b-amber-600'>popularity</div>
                            <div className='py-3 border-b border-b-amber-600'>{personData?.popularity}</div> 
                
                        </div>
                    ) : null
                }             
            </div>  
        </article>
    );
};

export default PersonBox;