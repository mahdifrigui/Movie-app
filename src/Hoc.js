import  React, {Component} from 'react'
import "./Hoc.css";

const Hoc = (WrappedComponent) => {
    return class BasicHoc extends Component {
        constructor(props){
            super(props)
            this.state = {
                load: false

            }
        }
        componentDidMount() {
            setTimeout(() =>{
                this.setState({
                    load: true
                })
            }, 2000)
            this.setState({
                load: false
            })
        }

        render() {
            return (this.state.load===false ? <div className="loader" /> : <WrappedComponent{...this.props}/> )
        }
    }


}
export default Hoc;