
import './App.css'
import { Greet } from './Component/Greet'
import { Person } from './Component/Person'
import { PersonList } from './Component/PersonList'
import { Status } from './Component/Status'
import { Heading } from './Component/Heading'
import { Oscar } from './Component/Oscar'

function App() {

  const personName = {
    firsttName:"Vijaya",
      lastName:"Mogaveera"
  }

  const personLists = [

    {
      firsttName:"Vijaya",
        lastName:"Mogaveera"
    },
    {
      firsttName:"Sandeep",
        lastName:"Mogaveera"
    },
    {
      firsttName:"Karthik",
        lastName:"Mogaveera"
    }
  
  
  

  ]
  
  return (
    <>
      <Greet name="vijaya" isLoggin={true}/>
      <Person name={personName}/>
      <PersonList  names={personLists}/>
      <Status status='Loading'/>
      <Heading>Placeholder present</Heading>
      <Oscar>
        <Heading>Oscar gose to Kathar movie</Heading>
      </Oscar>
    </>
  )
}

export default App
