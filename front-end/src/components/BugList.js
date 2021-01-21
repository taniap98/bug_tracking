import React, {Component} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import axios from "axios";

const Bug = ({ bug }) => {

    const history = useHistory();
    return (
      <div className="box" onClick={()=>{
        localStorage.setItem("bugSev", bug.severity);
        localStorage.setItem("bugPri", bug.priority);
        localStorage.setItem("bugDesc", bug.description);
        localStorage.setItem("bugLinkCom", bug.linkCommit);
        localStorage.setItem("bugId", bug.id);
        history.push("/seebug")
    }}>
        <p className="subtitle">{bug.description}</p>
        <p>{bug.linkCommit}</p>
      </div>
    );
  };
  
  class BugList extends Component {

    constructor(props){
      super(props);
      this.state = {
        bugs: []
      }
      this.info ={
        userId: localStorage.userId,
        projectId: localStorage.projId
      }
    }
    // state = {
    //   projects: [],
    //   isLoading: true,
    //   errors: null
    // };
    componentDidMount(){
      
      axios.post(`http://localhost:8080/api/bug/onlyMP`, this.info,  {headers: {'Authentication': localStorage.userId}})
        .then(res => {
            
          console.log(res.data);
          const bugs = res.data;
          this.setState({bugs})
        })
        .catch(err =>{
            console.log(this.info);
            console.log(err)
        } )
    }
  
    // fetchProjects() {
    //   fetch(`http://localhost:8080/api/project`)
    //     //.then(response => response.json())
    //     .then(res =>
    //       this.setState({
    //         projects: res.data,
    //         isLoading: false,
    //         isMounted: false
    //       })
    //     )
    //     .catch(error => this.setState({ error, isLoading: false }));
    // }
  
    // componentDidMount() {
    //   this.fetchProjects();
    // }
   
    render() {
        const props = this.props;

      const { isLoading, projects } = this.state;
      return (
        <section className="section">
          <div className="container" >
            {!isLoading ? (
              this.state.bugs.map(bug => {
                return <Bug key={bug.id} bug={bug} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      );
    }
  }
  
  export default withRouter(BugList);