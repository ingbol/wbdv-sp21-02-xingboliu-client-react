
const CourseEditor = ({history}) =>
    <div>
    <h1>
        <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
        Course Editor
    </h1>
    <div className="container">
        <div className="row bg-secondary">
            <div className="col-1">
                <i className="fa fa-times fa-2x text-light"></i>
            </div>
            <div className="col-3">
                <h4 className="text-light">CS5610-WebDev</h4>
            </div>
            <div className="col-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">
                            <i className="fa fa-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <div className="row">

            <div className="col-4 bg-dark pb-3">

                <ul className="list-group">
                    <li className="list-group-item active mb-3 mt-3">
                        Module 1 - jQuery
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item bg-secondary mb-3">
                        Module 2 - React
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item bg-secondary mb-3">
                        Module 3 - Redux
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item bg-secondary mb-3">
                        Module 4 - Native
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item bg-secondary mb-3">
                        Module 5 - Angular
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item bg-secondary mb-3">
                        Module 6 - Node
                        <i className="pull-right fa fa-times"></i>
                    </li>
                    <li className="list-group-item bg-secondary mb-3">
                        Module 7 - Mongo
                        <i className="pull-right fa fa-times"></i>
                    </li>
                </ul>

            </div>
            <div className="col-8">

                <ul className="nav nav-pills mt-3">
                    <li className="nav-item bg-secondary mr-3 mb-3">
                        <a className="nav-link text-light active" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item bg-secondary mr-3 mb-3">
                        <a className="nav-link text-light" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item bg-secondary mr-3 mb-3">
                        <a className="nav-link text-light" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item bg-secondary mr-3 mb-3">
                        <a className="nav-link text-light" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item bg-secondary mr-3 mb-3">
                        <a className="nav-link text-light" href="#">
                            <i className="fa fa-plus"></i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
export default CourseEditor