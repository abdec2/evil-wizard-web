import React from 'react'

const ResponsiveMenu = () => {
    return (
        <div id="menu" className="modal fade p-0">
            <div className="modal-dialog dialog-animated">
                <div className="modal-content h-100">
                    <div className="modal-header" data-dismiss="modal">
                        Menu <i className="far fa-times-circle icon-close"></i>
                    </div>
                    <div className="menu modal-body">
                        <div className="row w-100">
                            <div className="items p-0 col-12 text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu