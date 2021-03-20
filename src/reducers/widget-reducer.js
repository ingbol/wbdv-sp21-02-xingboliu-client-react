const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_LESSON":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            const newState1 = {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            return newState1
        case "DELETE_WIDGET":
            const newState2 = {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.wid) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState2
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.wid) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        default:
            return state
    }
}

export default widgetReducer