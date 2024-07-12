
import { type RootState } from "../../store";
import { increment, decrement } from "../../store/slices/counter";
import { Dashboard } from "./dashboard.component";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState)=>{
    return {counter: state.counter.value};
}

const mapDispatchToProps = {
    increment,
    decrement
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
