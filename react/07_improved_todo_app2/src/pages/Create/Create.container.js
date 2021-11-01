import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/todoAction'
import { increaseCount } from '../../store/actions/countAction'
import { Create } from './Create'

const mapStateToProps = (state) => ({ todos: state.todos })

const mapDispatchToProps = {
  addTodo,
  increaseCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
