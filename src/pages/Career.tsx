import { careerData, CareerItem } from 'data/careerData';

export default function Career() {
  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="font-sans text-5xl font-black text-gray-900">
          Career
        </div>
        <hr className="mt-2 h-1 bg-gray-700" />
        <ul className="mt-4 space-y-4">
          {careerData.map((item: CareerItem) => (
            <li
              key={item.key}
              className="rounded-md bg-white p-4 shadow-md"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              <p className="mt-2 text-gray-700">소속: {item.company}</p>
              <br />
              <p className="mt-1 text-sm text-gray-600">기간: {item.term}</p>
              <p className="mt-1 text-sm text-gray-600">담당: {item.role}</p>
              <p className="mt-1 text-sm text-gray-600">기술: {item.skills}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
