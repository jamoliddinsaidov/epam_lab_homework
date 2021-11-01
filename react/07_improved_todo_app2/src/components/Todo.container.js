import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../store/actions/todoAction'
import { decreaseCount } from '../store/actions/countAction'
import { Todo } from './Todo'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  toggleTodo,
  deleteTodo,
  decreaseCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
