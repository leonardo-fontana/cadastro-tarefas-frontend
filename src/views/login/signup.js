import {useState,  } from "react";

import Loading from '../../components/loading'
import SignInComponent from '../../components/autenticacao/signin'

const SignIn = (props) => {

    const [loading] = useState(false);

    const montarTela = () => (
        <div>
        
            <SignInComponent />      
        </div>
    )

    return (
       
        loading
            ? <Loading />
            : montarTela()
    )
}


export default SignIn;


/*const Navbar = styled.div`
    background-color:none !important;
    margin: 10px 0 20px;
    padding: 10px 0;
    border-bottom: thin dotted #4446;
    display:flex;
    
    .info {
        flex:1;
    }


`*/