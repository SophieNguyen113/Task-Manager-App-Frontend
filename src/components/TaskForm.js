const TaskForm = ({createTask, name, handleInputChange, isEditing, updateTask}) => {
  return (
    <form className="task-form" onSubmit={isEditing ? updateTask : createTask}>
        <input 
        type="text" 
        placeholder="Add a Task" 
        name="name" 
        onChange={handleInputChange} 
        value={name} 
        autoFocus />
        <button type="submit">{isEditing ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TaskForm;