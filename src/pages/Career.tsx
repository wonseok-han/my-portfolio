import { careerData, Project, Company } from 'data/careerData';
import { cls } from 'lib/utils';

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

const Career = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="font-sans text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
          Career
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        {careerData
          .sort((a, b) => (a.key > b.key ? -1 : a.key < b.key ? 1 : 0))
          .map((company: Company) => (
            <div
              key={company.key}
              className="mt-4 space-y-4 rounded-md bg-white p-4 shadow-md"
              data-aos="fade-up"
              data-aos-duration={1300}
            >
              <div className="flex flex-wrap">
                <h2 className="text-xl font-bold text-gray-900">
                  {company.name}
                </h2>
                <h2 className="text-xl font-bold text-gray-900">
                  ({company.term})
                </h2>
              </div>

              <div className="w-full border-b-[2px] border-t px-4 py-2.5 text-gray-700 sm:grid sm:grid-cols-1 sm:space-x-1 lg:flex lg:space-x-5">
                <h2 className="text-lg font-bold text-gray-900">
                  <div className="flex items-center">
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
                    <label>담당업무</label>
                  </div>
                </h2>
                <div className="mt-2 flex flex-col space-y-2 sm:mt-0">
                  {company.works.map((work, index) => (
                    <p
                      key={`${index}-${work}`}
                      className="text-sm text-gray-600 sm:ml-0 sm:mt-2 lg:ml-2 lg:mt-0"
                    >
                      - {work}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full border-b-[2px] px-4 py-2.5 text-gray-700 sm:grid sm:grid-cols-1 sm:space-x-1 lg:flex lg:space-x-5">
                <h2 className="text-lg font-bold text-gray-900">
                  <div className="flex items-center">
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
                    <label>프로젝트</label>
                  </div>
                </h2>
                <div className="mt-2 flex flex-col space-y-4 sm:mt-0">
                  {company.projects.map((project: Project) => (
                    <div
                      key={project.key}
                      className="w-full text-sm text-gray-600 sm:ml-0 sm:mt-2 lg:ml-2 lg:mt-0"
                      data-aos-duration="1300"
                    >
                      <h2 className="text-sm font-bold text-gray-900">
                        • {project.name}
                      </h2>
                      <div className="ml-3 mt-1 flex w-full items-start text-sm text-gray-600">
                        <label className="flex-none">‣ 소개:</label>
                        <p className="ml-2 text-sm text-gray-600">
                          {project.intro}
                        </p>
                      </div>
                      <div className="ml-3 mt-1 flex w-full items-start text-sm text-gray-600">
                        <label className="flex-none">‣ 기간:</label>
                        <p className="ml-2 text-sm text-gray-600">
                          {project.term}
                        </p>
                      </div>
                      <div className="ml-3 mt-1 flex items-start text-sm text-gray-600">
                        <label className="flex-none">‣ 업무:</label>
                        <div className="ml-2 grid grid-cols-1 space-y-1">
                          {project.roles && project.roles.length > 0
                            ? project.roles.map((role, index) => (
                                <p
                                  key={`${index}-${role}`}
                                  className="text-sm text-gray-600"
                                >
                                  - {role}
                                </p>
                              ))
                            : null}
                        </div>
                      </div>
                      <div className="ml-3 mt-1 flex items-start text-sm text-gray-600 sm:items-center">
                        <label className="flex-none">‣ 기술:</label>
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
                                  `${bgColor} ${borderColor} rounded border`
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
