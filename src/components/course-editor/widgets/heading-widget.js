import React, {useState} from 'react'

const HeadingWidget = (
    {
        deleteWidget,
        updateWidget,
        widget,
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <>
            {
                !editing &&
                <>
                    <div className="row">
                        <div className="col-9">
                            {widget.size == 1 && <h1>{widget.text}</h1>}
                            {widget.size == 2 && <h2>{widget.text}</h2>}
                            {widget.size == 3 && <h3>{widget.text}</h3>}
                            {widget.size == 4 && <h4>{widget.text}</h4>}
                            {widget.size == 5 && <h5>{widget.text}</h5>}
                            {widget.size == 6 && <h6>{widget.text}</h6>}
                        </div>
                        <div className="col-3">
                            <i onClick={() => setEditing(true)} className="fas fa-2x fa-cog float-right"></i>
                        </div>
                    </div>



                </>
            }
            {
                editing &&
                <>
                    <div className="row">
                        <div className="col-9">
                            <select onChange={(e) => {
                                setCachedWidget({
                                    ...cachedWidget,
                                    type: e.target.value
                                })
                            }} value={cachedWidget.type} className="form-control">
                                <option value={"HEADING"}>Heading</option>
                                <option value={"PARAGRAPH"}>Paragraph</option>
                                <option value={"VIDEO"}>Video</option>
                                <option value={"IMAGE"}>Image</option>
                                <option value={"LINK"}>Link</option>
                                <option value={"HTML"}>HTML</option>
                            </select>
                            <input onChange={(e) => {
                                setCachedWidget({
                                    ...cachedWidget,
                                    text: e.target.value
                                })
                            }} value={cachedWidget.text} className="form-control"></input>
                            <select onChange={(e) => {
                                setCachedWidget({
                                    ...cachedWidget,
                                    size: e.target.value
                                })
                            }} value={cachedWidget.size} className="form-control">
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <i onClick={() => {
                                setEditing(false)
                                updateWidget(widget.id, cachedWidget)
                            }} className="fas fa-2x fa-check float-right"></i>
                            <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default HeadingWidget