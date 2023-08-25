import {
  userData,
  userDataKeyName,
  skillData,
  skillDataKeyName,
} from 'data/userData';

const Home = () => {
  return (
    <div className="h-full bg-gray-100">
      <div
        className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8"
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
              {Object.keys(userData).map((key: string) => (
                <div
                  key={key}
                  className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:scale-105"
                >
                  <div className="px-6 py-4 text-center ">
                    <div className="font-sans text-lg font-extrabold text-gray-900">
                      {userDataKeyName[key]}
                    </div>
                    <hr className="mt-2 mb-4" />
                    <div className="text-gray-900">{userData[key]}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-10 font-sans text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          Skills
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <div className="mt-4 space-y-4">
          {skillData && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.keys(skillData).map((key: string) => (
                <div
                  key={key}
                  className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:scale-105"
                >
                  <div className="px-6 py-4 text-center">
                    <div className="font-sans text-lg font-extrabold text-gray-900">
                      {skillDataKeyName[key]}
                    </div>
                    <hr className="mt-2 mb-4" />
                    <div className="grid grid-cols-2">
                      {skillData[key].map((skill: string, index) => (
                        <div key={`${skill}-${index}`} className="relative">
                          <img
                            src={`${process.env.PUBLIC_URL}/${skill}`}
                            alt={`${skill}-${index}`}
                            className="w-full rounded-t-md object-scale-down"
                            style={{ height: 150 }}
                          />
                        </div>
                      ))}
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

export default Home;
