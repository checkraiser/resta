import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  const incrementAsync = () => dispatch({type: 'INCREMENT_ASYNC'})
  return Object.assign({}, bindActionCreators(CounterActions, dispatch), {incrementAsync: incrementAsync})
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);