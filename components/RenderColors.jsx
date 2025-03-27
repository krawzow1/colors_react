import './RenderColors.css'

const RenderColors = ({isMainChecked,isChildChecked, inputValues,setInputValues, colorValues,items, setItems}) => {
    
    const deleteSquare = (i) => {
        const decInputValue = [...inputValues]
        decInputValue[i] =  decInputValue[i]-1
        setInputValues(decInputValue)
    } 

    const shuffleItems = () => {
        setItems([...items].sort(() => Math.random() - 0.5));
    };

    const sortItems = () => {
        setItems([...items].sort((a,b) => a.id-b.id))
    }
    
    return(
        <div className='render_colors'>
            <p>Здесь будет рендер квадратов</p>
            <button type="button"
                onClick={shuffleItems}>Перемешать</button>
            <button type="button"
                onClick={sortItems}>Сортировка</button>
                {items.map((item,num) => (
                  isChildChecked[item.id] &&
                    (
                        <div className='container_colors' key={num}>
                            {item.label}
                            {[...Array(inputValues[item.id])].map((e,i) => (
                                <div 
                                    key = {`${item.id}-${i}`}
                                    className="square"
                                    style={{background: colorValues[item.id]}}
                                    onContextMenu={e => {
                                        e.preventDefault()
                                        deleteSquare(item.id)}}>    
                                </div>
                            ))}
                        </div>
                    )
                ))
                
            }
                
        </div>

    )
}

export default RenderColors