import React from 'react'

function Footer() {
    return (
        <>
            <div id="footer" className="row fixed-bottom justify-content-bewteen align-items-center py-2 px-3 bg-dark text-white">
                <div className="col col-md-3 d-flex align-items-center justify-content-start">
                    <img src="https://i.scdn.co/image/ab67616d00004851d92f69c3b3adb389afdde64f" className="img-fluid mr-1" alt="" />
                    <div className="d-flex flex-column justify-content-around mx-2">
                        <label className="current-title m-0">Procession - Remastered 2011</label>
                        <label className="current-artist m-0 text-muted">Queen</label>
                    </div>
                    <i className="fa fa-heart-o mx-2" aria-hidden="true"></i>
                    <i className="fa fa-picture-o mx-2" aria-hidden="true"></i>
                </div>
                <div className="col col-md-6 px-5">
                    <div id="controls" className="d-flex justify-content-around align-items-center px-5 py-1">
                        <i className="fa fa-random fa-sm mr-2" aria-hidden="true"></i>
                        <i className="fa fa-fast-backward mr-2" aria-hidden="true"></i>
                        <i className="fa fa-play-circle-o fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-fast-forward mr-2" aria-hidden="true"></i>
                        <i className="fa fa-refresh mr-2" aria-hidden="true"></i>
                    </div>
                    <div id="progress-time" className="d-flex align-items-center">
                        <div id="current-time" className="mr-2">3.21</div>
                        <div className="progress w-100">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <div id="album-duration" className="ml-2">7:10</div>
                    </div>
                </div>
                <div className="col col-md-3 d-flex justify-content-end align-items-center">
                    <i className="fa fa-list mx-2" aria-hidden="true"></i>
                    <div className="mx-2 d-flex justify-content-center align-items-center">
                        <i className="fa fa-window-maximize" aria-hidden="true"></i>
                        <i className="fa fa-mobile fa-lg" aria-hidden="true"></i>
                    </div>
                    <i className="fa fa-volume-up mx-2" aria-hidden="true"></i>
                    <div className="progress w-25">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
