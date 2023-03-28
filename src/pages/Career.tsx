import { careerData, CareerItem } from 'data/careerData';

export default function Career() {
  return (
    <div className="h-full bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-gray-900">Career</h1>
        <hr className="h-1 bg-gray-700" />
        <ul className="mt-4 space-y-4">
          {careerData.map((item: CareerItem) => (
            <li
              key={item.key}
              className="rounded-md bg-white p-4 shadow-md"
              data-aos="fade-up"
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
