import {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { hashString } from 'react-hash-string'


export const Login=()=> {
    let navigate = useNavigate();

    const[username, setUserName] = useState('');
    const[pass,setPass] = useState('');

    useEffect(()=>{
        sessionStorage.clear();
            },[]);

    const log =(e) =>{

        e.preventDefault();

        if(validate()){
            fetch("http://localhost:3000/db.json").then((res) => {
                return res.json();
            })
            .then((resp) => {
                
               if (Object.keys(resp).length ===0){
                   alert('Saisir votre username');
               }else{
                  if(resp.users.filter(u=>u.login === username && u.password === pass).length > 0){
                       sessionStorage.setItem("accessToken", hashString(username)); 
                       navigate('/')

                       const myTimeout= setTimeout(() => {
                        sessionStorage.removeItem("accessToken");
                        navigate('/');
                    }, 300000);
                        sessionStorage.setItem('timerId', myTimeout);   

                   }else{
                       alert('Le login ou le mot de passe est incorrect')   
                   }
               }   
            })
            .catch((err)=> {
                alert('Erreur !!!')
            })
        }
    }

    const validate = () => {
        let result = true;
        
        if (username === '' || username === null) {
            result = false;
            alert('Saisir votre username svp....');
            

        }
        if (pass === '' || pass === null) {
            result = false;
            alert('Saisir votre mot de passe svp...');
        }
        return result;
    }
    
    return (

        <div className="container">
            <form onSubmit={log}> 

            <div>
                <label className="account">ID ACCOUNT </label>
                <input type="text" name="account" value={username} onChange={e => setUserName(e.target.value)} className="info"/>

            </div>
            
            <div>
                <label className="account">PASSWORD</label>
                <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} className="info"/>

            </div>
               
            <div className="btn1">                  
                <button className="submit" onClick={log}>Connecter</button>
                                
                <button className="cancel" navigate="/" value="cancel">Annuler</button>
                   
            </div>
            <div>
                <a className = "forget" href="">Mot de passe oublie ???</a>           
            </div>  
               
            </form>

         </div>

    )
}

export default Login