import { connect } from 'react-redux'
import { editTodo } from '../../store/actions/todoAction'
import { Edit } from './Edit'

const mapStateToProps = (state) => ({
	todos: state.todos,
	detailedTodo: state.detailedTodo,
})

const mapDispatchToProps = {
	editTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
