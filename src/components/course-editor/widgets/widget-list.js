import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import widgetService from "../../../services/widget-service"
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets = [],
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget
}) => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();
    useEffect(() => findWidgetsForTopic(topicId), [topicId])

    return (
        <div>

            <i onClick={() => {
                if(topicId !== "undefined" && typeof topicId !== "undefined")
                    createWidget(topicId)}
            }
               className="fas fa-plus fa-2x float-right"></i>
            <br/>
            <br/>
            <ul className="List-group pl-0">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            widget.type === "HEADING" &&
                                <HeadingWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}
                                />
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}
                                />
                        }
                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}
                            />
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                widget={widget}
                            />
                        }
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidget: (tid) => {
            widgetService.createWidget(tid, {type: "HEADING", size: 1, text: "New Widget", widgetOrder: "1"})
                .then(actualWidget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: actualWidget
                }))
        },
        deleteWidget: (wid) => {
            widgetService.deleteWidget(wid)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    wid
                }))
        },
        updateWidget: (wid, widget) => {
            widgetService.updateWidget(wid, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    wid,
                    widget
                }))
        },
        findWidgetsForTopic: (tid) => {
            widgetService.findWidgetsForTopic(tid)
                .then(actualWidgets => dispatch({
                    type: "FIND_ALL_WIDGETS_FOR_LESSON",
                    widgets: actualWidgets
                }))
        }
    }
}

export default connect(stpm, dtpm)(WidgetList);