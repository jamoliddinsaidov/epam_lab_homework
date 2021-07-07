import { connect } from 'react-redux'
import { TodoList } from './TodoList'

const mapStateToProps = (state) => ({
	todos: state.todos,
	count: state.count,
})

export default connect(mapStateToProps)(TodoList)
