import React, {Component} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import axios from "axios";

const Project = ({ project }) => {

    const history = useHistory();
    return (
      <div className="box" onClick={()=>{
        localStorage.setItem("projName", project.name);
        localStorage.setItem("projRepository", project.repository);
        localStorage.setItem("projId", project.id);
        history.push("/seeproject")
    }}>
        <p className="subtitle">{project.name}</p>
        <p>{project.repository}</p>
      </div>
    );
  };
  
  class ProjectList extends Component {

    constructor(props){
      super(props);
      this.state = {
        projects: []
      }
    }
    // state = {
    //   projects: [],
    //   isLoading: true,
    //   errors: null
    // };
    componentDidMount(){
      
      axios.get(`http://localhost:8080/api/project`,  {headers: {'Authentication': localStorage.userId}})
        .then(res => {
          console.log(res.data);
          const projects = res.data;
          this.setState({projects})
        })
        .catch(err => console.log(err))
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
              this.state.projects.map(project => {
                return <Project key={project.id} project={project} />;
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      );
    }
  }
  
  export default withRouter(ProjectList);