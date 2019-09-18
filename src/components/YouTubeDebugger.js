// Code YouTubeDebugger Component Here

import React, {Component} from 'react'

class YoutubeDebugger extends Component{
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    settleResolution = () => {
        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                video: {
                    resolution: '720p'
                }
            }
        }))
        console.log(this.state)
    }

    settleBitrate = () => {
        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                bitrate: 12
            }
        }))
        console.log(this.state)
    }

    render(){
        return(
            <div>
            <button className='bitrate' onClick={this.settleBitrate}>BITRATE</button>
            <button className='resolution' onClick={this.settleResolution}>RESOLUTION</button>
            </div>
        )
    }
}

export default YoutubeDebugger