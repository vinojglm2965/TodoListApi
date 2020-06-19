import React, { useState, useEffect } from 'react';
import Contenido from './Contenido';


const MiLista = () => {
    const url = "https://assets.breatheco.de/apis/fake/todos/user/joselorant";
    const [lista, setLista] = useState([])
    const [input, setInput] = useState("")
    const cosa = "azul";

    useEffect(() => {
        getFetch(url);
    }, [])


    const recarga = (e) => {
        e.preventDefault();

        const id = (lista.length) ? lista[lista.length - 1].id + 1 : 1;


        
        const newList = [...lista, { id: id, "label": input, "done": true }];
        setLista(newList);
        setInput("");
        agregarFetch(newList);
    }

    const deleteMensaje = (id, lista, setLista) => {
        setLista(lista.filter(Contenid => Contenid.id !== id))
    }

    const eliminarTodo = (e) => {

        const borrarLista = [];
        const borrarList = [{ "label": 'Vacio', "done": true }];
        setLista(borrarLista);
        setInput("");
        eliminarFetch(borrarList);
    }


    const getFetch = () => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/joselorant', {
            method: 'GET',
            headers: {
                "content-Type": 'application/json'
            }
        })
            .then(res => {
                console.log(res.status)
                console.log(res.text)
                return res.json();

            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('error ', error);
            })
    }


    const agregarFetch = (data) => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/joselorant', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "content-Type": 'application/json'
            }
        })
            .then(res => {
                console.log(res.ok);
                console.log(res.status);
                console.log(res.text);
                console.log("Hola ESTO SE ENVIO:", input);
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('error ', error);
            })
    }

    const eliminarFetch = (data) => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/joselorant', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "content-Type": 'application/json'
            }
        })
            .then(res => {
                console.log(res.ok);
                console.log(res.status);
                console.log(res.text);
                console.log("Hola, SE BORRO TODO");
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('error:', error);
            })
    }

    
    return (
        <>
            <div className='Lista'>
                <form className='form' onSubmit={(e) => recarga(e)} >
                    <input className='input' type='Text' placeholder="Escribe Aqui..."
                        onChange={(e) => setInput(e.target.value)} value={input} />
                    <button value={cosa} onClick= {(e) => setInput(cosa)}></button>
                </form>
                <button className='btn' onClick={(e) => eliminarTodo(e)}>Borrar Todo</button>
                {lista.map((Contenid, i) => (
                    <Contenido key={i} label={Contenid.label}
                        id={Contenid.id} deleteMensaje={(id) => deleteMensaje(id, lista, setLista)} />
                ))}
            </div>
        </>
    );
}
export default MiLista;