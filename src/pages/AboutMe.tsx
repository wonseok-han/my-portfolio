import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { apis } from 'api';
import { UserProps } from 'types/data';

export const userDataKeyName: UserProps = {
  name: '성명',
  birthday: '생년월일',
  address: '주소',
  company: '현직장',
  phone: '연락처',
  email: '이메일',
};

const AboutMe = () => {
  const { data: userData, refetch: refetchUser } = useQuery({
    queryKey: ['user'],
    queryFn: apis.getUser,
  });

  useEffect(() => {
    refetchUser();
  }, []);

  return (
    <div className="h-full bg-gray-100">
      <div
        className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="font-sans text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          About Me
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <div className="mt-4 space-y-4">
          {userData && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.keys(userData).map((key: keyof UserProps, index) => (
                <div
                  key={key}
                  data-aos="flip-right"
                  data-aos-duration={400 * (index + 1)}
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:scale-105">
                    <div className="px-6 py-4 text-center ">
                      <div className="font-sans text-lg font-extrabold text-gray-900">
                        {userDataKeyName[key]}
                      </div>
                      <hr className="mb-4 mt-2" />
                      <div className="min-h-7 text-gray-900">
                        {userData[key]}
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

export default AboutMe;
