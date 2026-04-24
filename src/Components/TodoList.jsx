import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Search } from "lucide-react";

import TodoItem from "../Components/TodoItem";
import AddModal from "../Components/AddModal";
import EditModal from "../Components/EditModal";
import InfoModal from "../Components/InfoModal";
import { BASE_URL } from "../Config/config";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); 
  const [editId, setEditId] = useState(null); 


  async function getTodos() {
    try {
      const { data } = await axios.get(BASE_URL);
      setTodos(data.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`${BASE_URL}?id=${id}`);
      getTodos();
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  async function postTodo() {
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Description", desc);
    if (file) formData.append("Images", file);

    try {
      await axios.post(BASE_URL, formData);
      getTodos();
      closeAndClear();
    } catch (error) {
      console.error("Post error:", error);
    }
  }

  const handleEditClick = (item) => {
    setEditId(item.id);
    setName(item.name);
    setDesc(item.description);
    setOpenEdit(true);
  };

  async function putTodo() {
    const updateData = {
      id: editId,
      name: name,
      description: desc
    };

    try {
      await axios.put(BASE_URL, updateData, {
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        }
      });
      getTodos();
      closeAndClear();
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
    }
  }

  const handleInfoClick = (item) => {
    setSelectedItem(item);
    setOpenInfo(true);
  };

  const closeAndClear = () => {
    setOpenAdd(false);
    setOpenEdit(false);
    setOpenInfo(false);
    setName("");
    setDesc("");
    setFile(null);
    setEditId(null);
    setSelectedItem(null);
  };

  const filterData = todos.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F0F] p-4 md:p-8 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="bg-[#111] border border-[#262626] px-6 py-4 rounded-2xl">
            <h2 className="text-2xl font-bold uppercase tracking-tight">Project Tasks</h2>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tasks..."
                className="w-full bg-[#1A1A1A] border border-[#262626] rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#D48D71] transition-colors"
              />
            </div>

            <button
              onClick={() => setOpenAdd(true)}
              className="bg-[#D48D71] p-3 rounded-xl text-black hover:bg-[#b0745b] transition-all active:scale-95"
            >
              <Plus size={24} />
            </button>
          </div>
        </div>

        {filterData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterData.map((todo) => (
              <TodoItem
                key={todo.id}
                item={todo}
                onDelete={() => deleteTodo(todo.id)}
                onEdit={() => handleEditClick(todo)}
                onInfo={() => handleInfoClick(todo)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#111] rounded-[3rem] border border-[#262626] border-dashed">
            <p className="text-gray-500 uppercase tracking-widest text-sm">No tasks found</p>
          </div>
        )}
      </div>

      <AddModal 
        open={openAdd} 
        setOpen={closeAndClear} 
        name={name} 
        setName={setName} 
        desc={desc} 
        setDesc={setDesc} 
        setFile={setFile} 
        addUser={postTodo} 
      />

      <EditModal 
        open={openEdit} 
        setOpen={closeAndClear} 
        name={name} 
        setName={setName} 
        desc={desc} 
        setDesc={setDesc} 
        setFile={setFile} 
        onSave={putTodo} 
      />

      <InfoModal 
        open={openInfo} 
        setOpen={closeAndClear} 
        item={selectedItem} 
      />
    </div>
  );
}