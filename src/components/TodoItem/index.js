// Write your code here
const TodoItem = props => {
  const {todoDetais, deleteTodo} = props
  const {id, title} = todoDetais

  const ondeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-container">
      <p>{title}</p>
      <button type="button" onClick={ondeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
