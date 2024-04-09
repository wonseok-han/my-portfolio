import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { apis } from 'api';
import LazyImage from 'components/LazyImage';
import { SkillNameProps, SkillProps } from 'types/data';

export const skillDataKeyName: SkillNameProps = {
  frontend: '프론트엔드',
  backend: '백엔드',
  scm: '형상관리',
  database: '데이터베이스',
};

const Skills = () => {
  const { data: skillData, refetch: refetchSkills } = useQuery({
    queryKey: ['skills'],
    queryFn: apis.getSkills,
  });

  useEffect(() => {
    refetchSkills();
  }, []);

  return (
    <div className="h-full bg-gray-100">
      <div
        className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="mt-10 font-sans text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Skills
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <div className="mt-4 space-y-4">
          {skillData && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.keys(skillData).map((key: keyof SkillProps, index) => (
                <div
                  key={key}
                  data-aos="flip-left"
                  data-aos-duration={400 * (index + 1)}
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:scale-105">
                    <div className="px-6 py-4 text-center">
                      <div className="font-sans text-lg font-extrabold text-gray-900">
                        {skillDataKeyName[key]}
                      </div>
                      <hr className="mb-4 mt-2" />
                      <div className="grid grid-cols-2">
                        {skillData[key].map(
                          (skill: keyof SkillProps, index) => (
                            <div key={`${skill}-${index}`} className="relative">
                              <LazyImage
                                alt={`${skill}-${index}`}
                                className="w-full rounded-t-md object-scale-down"
                                src={`${process.env.PUBLIC_URL}/${skill}`}
                                style={{ height: 150 }}
                              />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
