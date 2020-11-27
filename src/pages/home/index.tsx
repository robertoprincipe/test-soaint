import React from 'react';
import "./home.css";
import * as api from "../../api";

class Home extends React.Component<any, any> {
	
  constructor(props: any) {
    super(props);
    this.state = {
      info: []
    };
  }  

	//función para manipualr la funcion de servicio.
  showInfo = () => {
    api.getInfo().then((res: any) => {
      const { data } = res;
	  console.log(res.data);
      this.setState({ info: res.data });
    })
      .catch((err: any) => {
        console.log(err);
      });
  }

//Ejecutamos la funcion hacia el api
  componentDidMount = async () => {
	this.showInfo();
  }

//Pintamos la vista
  render() {
    const { info } = this.state;
    return (
      <>    
		<div className="home">
			<h1>TEST</h1>    
            <p><strong>Nombres:</strong> { info.name }</p>
			<p><strong>Bio:</strong> { info.bio }</p>
			<p><strong>url:</strong> { info.url }</p>
		</div>
      </>
    );
  }
}

export default Home;