import { connect } from 'react-redux'
import { deleteTodo } from '../../store/actions/todoAction'
import { getTodo } from '../../store/actions/detailedTodoAction'
import { decreaseCount } from '../../store/actions/countAction'
import { DetailedTodo } from './DetailedTodo'

const mapStateToProps = (state) => ({
	todos: state.todos,
	detailedTodo: state.detailedTodo,
})

const mapDispatchToProps = {
	deleteTodo,
	decreaseCount,
	getTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedTodo)
