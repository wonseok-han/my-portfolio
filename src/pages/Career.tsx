import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { apis } from 'api';
import ImageDialog from 'components/ImageDialog';
import LazyImage from 'components/LazyImage';
import { cls } from 'lib/utils';
import { CareerProjectProps, CompanyProps } from 'types/data';

const colors = [
  'red',
  'orange',
  'lime',
  'teal',
  'blue',
  'violet',
  'pink',
  'yellow',
];

const Careers = ({
  data,
  onImageClick,
}: {
  data: Array<CompanyProps>;
  onImageClick: (image: string) => void;
}) => {
  const handleImageClick = useCallback(
    (image: string) => {
      onImageClick(image);
    },
    [onImageClick]
  );

  return (
    <>
      {data
        ?.sort((a, b) => (a.key > b.key ? -1 : a.key < b.key ? 1 : 0))
        .map((company: CompanyProps) => (
          <div
            key={company.key}
            className="mt-4 space-y-4 rounded-md bg-white p-4 shadow-md dark:bg-gray-800 dark:shadow-sm dark:shadow-white"
            data-aos="fade-up"
            data-aos-duration={1300}
          >
            <div className="flex items-end gap-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {company.name}
              </h2>
              <h2 className="text-base font-bold text-gray-500 dark:text-gray-200">
                {company.term}
              </h2>
            </div>

            <div className="w-full border-b-[2px] border-t px-4 py-2.5 text-gray-700 sm:grid sm:grid-cols-1 sm:space-x-1 lg:flex lg:space-x-5">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                <div
                  className="flex items-center"
                  data-aos="zoom-in-right"
                  data-aos-duration="1300"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <label className="w-20 font-extrabold">담당업무</label>
                </div>
              </h2>
              <div
                className="mt-2 flex flex-col space-y-2 sm:mt-0"
                data-aos="zoom-in-right"
                data-aos-duration="1300"
              >
                {company.works.map((work: string, index) => (
                  <p
                    key={`${index}-${work}`}
                    className="text-base text-gray-600 sm:ml-0 sm:mt-2 lg:ml-2 lg:mt-0 dark:text-gray-200"
                  >
                    • {work}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full border-b-[2px] px-4 py-2.5 text-gray-700 sm:grid sm:grid-cols-1 sm:space-x-1 lg:flex lg:space-x-5">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                <div
                  className="flex items-center"
                  data-aos="zoom-in-left"
                  data-aos-duration="1300"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <label className="w-20 font-extrabold">프로젝트</label>
                </div>
              </h2>
              <div className="mt-2 grid grid-cols-1 gap-6 space-y-2 sm:mt-0 lg:flex lg:flex-col">
                {company.projects.map((project: CareerProjectProps) => (
                  <div key={project.key} className="grid grid-cols-1">
                    <div
                      className="w-full text-sm text-gray-600 sm:ml-0 sm:mt-2 lg:ml-2 lg:mt-0"
                      data-aos="zoom-in-left"
                      data-aos-duration="1300"
                    >
                      <div className="flex flex-col justify-center gap-1">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.name}
                        </h2>
                        <p className="font-semibold text-gray-600 dark:text-gray-200">
                          {project.term}
                        </p>
                      </div>
                      <div className="my-4 flex w-full flex-col items-start gap-1 text-base text-gray-600 dark:text-gray-200">
                        {project.intro.map((intro: string) => (
                          <p
                            key={intro}
                            className="text-base text-gray-600 dark:text-gray-200"
                          >
                            {intro}
                          </p>
                        ))}
                      </div>
                      {project?.man && project.man.length > 0 && (
                        <div className="ml-3 mt-4 flex flex-col items-start gap-1 text-sm text-gray-600 dark:text-gray-200">
                          <label className="flex-none text-lg font-bold">
                            구성 인원
                          </label>
                          <div className="ml-2 grid grid-cols-1 space-y-1">
                            {project.man.map((man, index) => (
                              <p
                                key={`${index}-${man}`}
                                className="text-base text-gray-600 dark:text-gray-200"
                              >
                                • {man}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="ml-3 mt-4 flex flex-col items-start gap-1 text-sm text-gray-600 dark:text-gray-200">
                        <label className="flex-none text-lg font-bold">
                          업무/개발
                        </label>
                        <div className="ml-2 grid grid-cols-1 space-y-1">
                          {project.roles && project.roles.length > 0
                            ? project.roles.map((role, index) => (
                                <p
                                  key={`${index}-${role}`}
                                  className="text-base text-gray-600 dark:text-gray-200"
                                >
                                  • {role}
                                </p>
                              ))
                            : null}
                        </div>
                      </div>
                      <div className="ml-3 mt-4 flex flex-col items-start gap-1 text-sm text-gray-600 dark:text-gray-200">
                        <label className="flex-none text-lg font-bold">
                          성과/결과
                        </label>
                        <div className="ml-2 grid grid-cols-1 space-y-1">
                          {project?.result && project.result.length > 0
                            ? project.result.map((result, index) => (
                                <p
                                  key={`${index}-${result}`}
                                  className="text-base text-gray-600 dark:text-gray-200"
                                >
                                  • {result}
                                </p>
                              ))
                            : null}
                        </div>
                      </div>
                      <div className="ml-3 mt-4 flex items-start gap-1 text-sm text-gray-600 sm:items-center dark:text-gray-200">
                        <label className="flex-none text-lg font-bold">
                          기술
                        </label>
                        <div className="ml-2 grid grid-cols-1 space-y-1 sm:flex sm:flex-row sm:space-x-1 sm:space-y-0">
                          {project.skills.map((skill, index) => {
                            const randomColor =
                              colors[Math.floor(Math.random() * colors.length)];
                            const bgColor = `bg-${randomColor}-300`;
                            const borderColor = `border-${randomColor}-500`;

                            return (
                              <div
                                key={`${index}-${skill}`}
                                className={cls(
                                  `${bgColor} ${borderColor} rounded font-semibold`
                                )}
                              >
                                <p className="p-1 text-xs text-gray-600">
                                  {skill}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {(project.images || []).length > 0 && (
                      <div
                        className="m-2 grid gap-2 p-2 lg:flex lg:max-h-96"
                        data-aos="zoom-out-down"
                        data-aos-duration="1300"
                      >
                        {project.images?.map((image) => (
                          <LazyImage
                            key={image}
                            alt={project.name}
                            className="w-auto lg:max-h-80"
                            src={image}
                            onClick={() => handleImageClick(image)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

const Career = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const { data, refetch } = useQuery({
    queryKey: ['careers'],
    queryFn: apis.getCareers,
  });

  const handleImageClick = useCallback(
    (image: string) => {
      setSelectedImage(image);
    },
    [setSelectedImage]
  );

  const handleClose = useCallback(() => {
    setSelectedImage('');
  }, [setSelectedImage]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="h-full bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">Career</h2>
        <hr className="mt-2 h-1 bg-gray-700" />

        <Careers data={data} onImageClick={handleImageClick} />

        <ImageDialog
          open={selectedImage ? true : false}
          src={selectedImage}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Career;
