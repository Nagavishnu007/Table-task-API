import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/todoSlice';

const TodoTable = () => {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.todos);
  
  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full lg:w-1/2 mx-auto p-4">
      {/* Search Input */}
      <div className="mb-4 sticky top-20">
        <input
          type="text"
          placeholder="Filter todos..."
          className="w-full p-2 border rounded"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-y-auto max-h-96 border border-gray-700 rounded-md">
        <table className="min-w-full bg-transparent shadow-md">
          {/* Sticky Table Header */}
          <thead className="bg-gray-900 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-white">ID</th>
              <th className="px-4 py-2 text-white">Title</th>
              <th className="px-4 py-2 text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((todo) => (
              <tr key={todo.id} className="border-b-[0.2px] hover:bg-gray-950">
                <td className="px-4 py-4 text-center">{todo.id}</td>
                <td className="px-4 py-2 text-center capitalize">{todo.title}</td>
                <td className="px-4 py-2 text-center">
                  <span className={`px-2 py-1 rounded ${todo.completed ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {todo.completed ? 'Completed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoTable;
