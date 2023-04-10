const TaskItem = ({ title, description, status }) => {
  return (
    <>
      <li>
        <h2>Title: {title}</h2>
        <p>Description: {description}</p>
        <p>Status: {status}</p>
      </li>
    </>
  );
};

export default TaskItem;
