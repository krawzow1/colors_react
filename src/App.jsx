
import './App.css'
import {useState} from 'react'
import InitColors from '../components/InitColors'
import RenderColors from '../components/RenderColors'

function App() {
  const [isMainChecked, setIsMainChecked] = useState(false)
  const [isChildChecked, setIsChildChecked] = useState([false, false, false, false, false])
  const [inputValues, setInputValues] = useState([0, 0, 0, 0, 0])
  const [colorValues, setColorValues] = useState(['#FF0000','#FF1493','#00FF00','#00FFFF','#0000CD'])
  const [nameMainCheckbox, setNameMainCheckbox] = useState(['List 1','List 2','List 3','List 4','List 5',])

  const [items, setItems] = useState([
    { id: 0, label: "Item 1" },
    { id: 1, label: "Item 2" },
    { id: 2, label: "Item 3" },
    { id: 3, label: "Item 4" },
    { id: 4, label: "Item 5" },
]);

  return (
      <div className='container'>
        <InitColors
          items={items}
          isMainChecked={isMainChecked}
          setIsMainChecked={setIsMainChecked}
          isChildChecked={isChildChecked}
          setIsChildChecked={setIsChildChecked}
          inputValues={inputValues}
          setInputValues={setInputValues}
          colorValues={colorValues}
          setColorValues={setColorValues}
          nameMainCheckbox = {nameMainCheckbox}
        />
        <RenderColors
          items={items}
          setItems={setItems}
          isChildChecked={isChildChecked}
          inputValues={inputValues}
          setInputValues={setInputValues}
          colorValues={colorValues}
          isMainChecked={isMainChecked}
        />
      </div>
  )
}

export default App
