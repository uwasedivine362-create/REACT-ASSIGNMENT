function IdCard({ person }) {
  const { id, name, role, department, image } = person;

  return (
    <article className="bg-white border rounded-lg p-4 shadow">
      <div className="flex items-center gap-3">
        <img
          src={image || "https://via.placeholder.com/80"}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-blue-700">{role}</p>
          <p className="text-sm text-gray-600">{department}</p>
        </div>
      </div>
      <div className="mt-3 pt-2 border-t text-sm text-gray-700">
        ID Number: {id}
      </div>
    </article>
  );
}

export default IdCard;
