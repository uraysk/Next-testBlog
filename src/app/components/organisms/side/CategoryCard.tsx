export const CategoryCard = () => {
  return (
    <div className="shadow-md rounded p-5 mb-6 mt-4 bg-pink-100">
      <h3 className="font-bold text-slate-700 mb-2">Category</h3>
      <ul className="text-sm text-slate-600">
        <li>
          <a href="#">Technology</a>
        </li>
        <li>
          <a href="#">Automotive</a>
        </li>
        <li>
          <a href="#">Finance</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
      </ul>
    </div>
  );
};
