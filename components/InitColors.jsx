


const InitColors = (
        {isMainChecked,
        setIsMainChecked,
        isChildChecked,
        setIsChildChecked,
        inputValues,
        setInputValues,
        colorValues,
        setColorValues,
        nameMainCheckbox,
        items}
) => {


    

    const cntItems = [0]
    const renderItems = () => {
        return (
            items.map(item =>  (
            <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <label>
                    <input type='checkbox'
                        checked={isChildChecked[item.id]}
                        onChange={e => toggleCheckbox(item.id,e.target.checked)}/>
                    {item.label}
                </label>

                {isChildChecked[item.id] &&
                    <>
                        <input
                            type="number"
                            value={inputValues[item.id]}
                            onChange={e => handleInputChange(item.id, e.target.value)}
                            placeholder="Введите число"
                            style={{width: '50px'}}
                            min={0}
                        />
                        
                        <input type="color" 
                            id={`color-${item.id}`}
                            name="color"
                            value={colorValues[item.id]}
                            onChange={(e) => changeColor(e, item.id)} />
                        <label htmlFor="color">Color</label>
                    </>}
            </div>
            
            ))
        )
    }

    const changeColor = (e,id) => {
        const updateColor  = [...colorValues]
        updateColor[id] = e.target.value
        setColorValues(updateColor)
    }

    const toggleCheckbox = (id,checked) => {
        const updateChecked = [...isChildChecked]
        updateChecked[id] = checked
        setIsChildChecked(updateChecked)
    }

    const handleInputChange = (id, value) => {
        const updatedValues = [...inputValues]
        updatedValues[id] = +value
        setInputValues(updatedValues)
    }

    const viewItems = renderItems()

    return (
        <div className='colors'>
            {cntItems.map(i => (
                <div className="item" key={i}>
                    {/* Главный чекбокс для группы */}
                    <label className="main-checkbox">
                        <input
                        className="big"
                        type="checkbox"
                        checked={isMainChecked}
                        onChange={(e) => setIsMainChecked(e.target.checked)}
                        />
                        Главный пункт {i + 1}
                    </label>
                    {viewItems}
                    
                </div>
            ))}
        </div>
    )
}



export default InitColors