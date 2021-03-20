import React, {useState} from 'react'

const ParagraphWidget = (
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
                            <p>
                                {widget.text}
                            </p>
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
                            <textarea onChange={(e) => {
                                setCachedWidget({
                                    ...cachedWidget,
                                    text: e.target.value
                                    })
                            }} value={cachedWidget.text} className="form-control"></textarea>
                        </div>
                        <div className="col-3">
                            <i onClick={() => {
                                updateWidget(widget.id, cachedWidget)
                                setEditing(false)
                            }} className="fas fa-2x fa-check float-right"></i>
                            <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ParagraphWidget