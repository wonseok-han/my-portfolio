/* eslint-disable @typescript-eslint/indent */
import { careerData, CareerItem, CareerCompany } from 'data/careerData';

const Career = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="font-sans text-5xl font-black text-gray-900">
          Career
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        {careerData.map((company: CareerCompany) => (
          <div
            key={company.key}
            className="mt-4 space-y-4 rounded-md bg-white p-4 shadow-md"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <h2 className="text-xl font-bold text-gray-900">
              {company.name} ({company.term})
            </h2>
            <div className="w-full border-t border-b-[2px] px-4 py-2.5 text-gray-700 sm:grid sm:grid-cols-1 sm:space-x-1 lg:flex lg:space-x-5">
              <h2 className="text-lg font-bold text-gray-900">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                  담당업무
                </div>
              </h2>
              <div className="flex flex-col space-y-2">
                {company.works.map((work, index) => (
                  <p
                    key={`${index}-${work}`}
                    className="text-sm text-gray-600 sm:ml-0 sm:mt-2 lg:mt-0 lg:ml-2"
                  >
                    - {work}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full border-t border-b-[2px] px-4 py-2.5 text-gray-700 sm:grid sm:grid-cols-1 sm:space-x-1 lg:flex lg:space-x-5">
              <h2 className="text-lg font-bold text-gray-900">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                  프로젝트
                </div>
              </h2>
              <div className="flex flex-col space-y-4">
                {company.projects.map((item: CareerItem) => (
                  <div
                    key={item.key}
                    className="text-sm text-gray-600 sm:ml-0 sm:mt-2 lg:mt-0 lg:ml-2"
                    data-aos-duration="1300"
                  >
                    <h2 className="text-sm font-bold text-gray-900">
                      • {item.name}
                    </h2>
                    <p className="mt-1 ml-3 text-sm text-gray-600">
                      ‣ 소개: {item.intro}
                    </p>
                    <p className="mt-1 ml-3 text-sm text-gray-600">
                      ‣ 기간: {item.term}
                    </p>
                    <p className="mt-1 ml-3 flex text-sm text-gray-600">
                      ‣ 업무:
                      <div className="flex flex-col space-y-1">
                        {item.roles && item.roles.length > 0
                          ? item.roles.map((role, index) => (
                              <div key={`${index}-${role}`}>
                                <p className="ml-1 text-sm text-gray-600">
                                  - {role}
                                </p>
                              </div>
                            ))
                          : null}
                      </div>
                    </p>
                    <p className="mt-1 ml-3 text-sm text-gray-600">
                      ‣ 기술: {item.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
