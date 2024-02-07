
import Card from './components/Card'
import './App.css'
import Header from './components/Header'
import Profile from './components/Box-text'

function App() {


  return (
    <>
    <Header/>
     
     <Profile/>
     <div className='container'>
     <Card
        image="./../javascrip.png"
        title="Javascript"
        text='Lógica de programação, estrutura de controle e loops, arrays, programação funcional, POO, DOM'
        />
        <Card
        image='./../css.png'
        title="CSS3"
        text='Fundamentos, Flexbox, Grid, Bootstrap, Bulma e Responsividade com media query.'
        />
        
        <Card
        image='./../html.png'
        title="HTML5"
        text='Elementos e tags, listas, tabelas, formulário, atributos, links e navegação e integração com javascript'
        />
        <Card
        image='./../react2.png'
        title='React JS'
        text='Componentes (Listas, forms, tables e etc..), Props e State, Eventos, React Router, useState e useEffect, Estilização'
        />
        <Card
        image='./../node (2).png'
        title='Node JS'
        text="Módulos node, NPM, Express, Mongoose, API RESTful, Middleware, autenticação, Programação Assícrona."
        />
       
     </div>
     
    </>
  )
}

export default App
