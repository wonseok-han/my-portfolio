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
            <h2 className="text-lg font-bold text-gray-900">
              {company.name} ({company.term})
            </h2>
            <div className="m-1 rounded-md bg-gray-200">
              {company.projects.map((item: CareerItem) => (
                <div
                  key={item.key}
                  className="mb-1  p-3 shadow-sm"
                  data-aos="fade-up"
                  data-aos-duration="1300"
                >
                  <h2 className="text-sm font-bold text-gray-900">
                    • {item.name}
                  </h2>
                  <p className="mt-1 ml-2 text-sm text-gray-600">
                    - 기간: {item.term}
                  </p>
                  <p className="mt-1 ml-2 text-sm text-gray-600">
                    - 담당: {item.role}
                  </p>
                  <p className="mt-1 ml-2 text-sm text-gray-600">
                    - 기술: {item.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
