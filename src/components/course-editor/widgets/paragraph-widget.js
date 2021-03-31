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
                                <option value={"LIST"}>List</option>
                                <option value={"VIDEO"}>Video</option>
                                <option value={"IMAGE"}>Image</option>
                                <option value={"LINK"}>Link</option>
                                <option value={"HTML"}>HTML</option>
                            </select>

                            {
                                cachedWidget.type === "HEADING" &&
                                <>
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
                                </>
                            }
                            {
                                cachedWidget.type === "PARAGRAPH" &&
                                <>
                                    <textarea onChange={(e) => {
                                        setCachedWidget({
                                            ...cachedWidget,
                                            text: e.target.value
                                        })
                                    }} value={cachedWidget.text} className="form-control"></textarea>
                                </>
                            }
                            {
                                cachedWidget.type === "LIST" &&
                                <>
                                    <input type="checkbox" id="ordered" onChange={(e) => {
                                        setCachedWidget({
                                            ...cachedWidget,
                                            ordered: e.target.checked
                                        })
                                    }} checked={cachedWidget.ordered}/>
                                    <label for="ordered">Ordered</label>

                                    <textarea onChange={(e) => {
                                        setCachedWidget({
                                            ...cachedWidget,
                                            text: e.target.value
                                        })
                                    }} value={cachedWidget.text} className="form-control"></textarea>
                                </>
                            }
                            {
                                cachedWidget.type === "IMAGE" &&
                                <>
                                    Image URL
                                    <input onChange={(e) => {
                                        setCachedWidget({
                                            ...cachedWidget,
                                            src: e.target.value
                                        })
                                    }} value={cachedWidget.src} className="form-control"></input>

                                    Image width
                                    <input onChange={(e) => {
                                        setCachedWidget({
                                            ...cachedWidget,
                                            width: e.target.value
                                        })
                                    }} value={cachedWidget.width} className="form-control"></input>

                                    Image height
                                    <input onChange={(e) => {
                                        setCachedWidget({
                                            ...cachedWidget,
                                            height: e.target.value
                                        })
                                    }} value={cachedWidget.height} className="form-control"></input>
                                </>
                            }

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