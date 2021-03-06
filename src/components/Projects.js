import React from 'react'

const card = {
    marginBottom:'30px'
}

class Projects extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoad: false,
            list : []
        }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/tbm5k/repos')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    list : data,
                    isLoad : true
                });
            });
    }

    render(){
        return(
            <div>
                {console.log('changed to Projects page')}
                {  
                    !this.state.isLoad ? <div class="loader"></div> : 
                    <div className="row">
                            {
                                this.state.list.map(repo => 
                                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center box">
                                        <div className=" card text-left" style={card} key={repo.id}>
                                            <div className="card-body">
                                                <h5 className="card-title">{repo.name}</h5>
                                                <p className="card-text">{repo.description}</p>
                                                <a href={repo.html_url} className="btn btn-outline-dark">View project</a>
                                            </div>
                                        </div>
                                    </div>  
                                )
                            }
                    </div>
                }
            </div>
        );
    }
}

export default Projects