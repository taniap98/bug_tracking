import React, {Component} from 'react';
import {withRouter, useHistory} from 'react-router-dom';



const Users = ({ user }) => {
    const history = useHistory();
    return (
      <div className="box" onClick={()=>{
        history.push("/seeproject")
    }}>
        <p className="subtitle">{user.name}</p>
        <p>{user.email}</p>
      </div>
    );
  };
  
  class ProjectList extends Component {
    state = {
      users: [],
      isLoading: true,
      errors: null
    };
  
    fetchUsers() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            users: data,
            isLoading: false
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchUsers();
    }
   
    render() {
        const props = this.props;

      const { isLoading, users } = this.state;
      return (
        <section className="section">
          <div className="container" >
            {!isLoading ? (
              users.map(user => {
                return <Users key={user.username} user={user} />;
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