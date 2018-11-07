import React, {Component} from 'react'
import CKEditor from "react-ckeditor-component";

class Ckeditor extends Component {
    constructor(props) {
        super(props);
        this.onChangeCk = this.onChangeCk.bind(this);
        this.state = {
            content: '',
        }
    }
    onChangeCk(evt){
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
      console.log(this.state)
    }
    render() {
        return (
            <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              events={{
                "change": this.onChangeCk
              }}
            />
        )
    }
}
export default Ckeditor;